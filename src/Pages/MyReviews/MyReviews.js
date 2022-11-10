import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import MyReviewInfo from '../ReviewPage/MyReviewInfo';


const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`https://bjm-server.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = review =>{
        const proceed = window.confirm('are you sure you want to delete reviews');
        if(proceed){
            fetch(`https://bjm-server.vercel.app/reviews/${review._id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount > 0){
                    toast.success('deleted successfully')
                    const remaining = reviews.filter(rew=> rew._id !== review._id)
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
                                 handleDelete={handleDelete}
                             ></MyReviewInfo>)
                         }
                     </tbody>
        
                 </table>
             </div>
    );
};

export default MyReviews;