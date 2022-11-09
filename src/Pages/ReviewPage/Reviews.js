import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    
    console.log(reviews)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
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

        <div className='lg:mx-40 md:w-full'>
             {reviews.length === 0 ?
                <><p>Add review</p></>
                :
                <>
                    <div className="">
                        <table className="table overflow-x-auto w-full">
                            <thead>
                                <tr className='text-teal-600 mx-40'>
                                    <th>

                                    </th>
                                    <th>Pic</th>
                                    <th>Name</th>
                                    <th>Review</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className='lg:w-2/4'>
                                {
                                reviews.map(review => <ReviewsCard key={review._id} review={review}handleDelete={handleDelete}></ReviewsCard>)
                                }
                            </tbody>

                        </table>
                    </div>
                </>

            }
        </div>
    );
};

export default Reviews;