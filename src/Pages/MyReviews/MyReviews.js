import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewInfo from '../ReviewPage/MyReviewInfo';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('are you sure you want to delete reviews');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaining = reviews.filter(rew=> rew._id !== id)
                    setReviews(remaining);
                }
            })
        }
    }
    return (
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 text-teal-600">
                 <table className="table w-full">
                     <thead>
                         <tr>
                             <th>
        
                             </th>
                             <th>Pic</th>
                             <th>Name</th>
                             <th>Review</th>
                             <th></th>
                             </tr>
                     </thead>
                     <tbody>
                         {
                             reviews.map(review => <MyReviewInfo
                                 key={review._id}
                                 review={review}
                             ></MyReviewInfo>)
                         }
                     </tbody>
        
                 </table>
             </div>
    );
};

export default MyReviews;