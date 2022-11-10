import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Reviews = () => {
    const {user} = useContext(AuthContext)
    
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [user?.email])

    // const handleDelete = id =>{
    //     const proceed = window.confirm('are you sure you want to delete reviews');
    //     if(proceed){
    //         fetch(`http://localhost:5000/reviews/${id}`,{
    //             method:'DELETE',
    //         })
    //         .then(res=>res.json())
    //         .then(data=> {
    //             console.log(data)
    //             if(data.deletedCount > 0){
    //                 alert('deleted successfully')
    //                 const remaining = reviews.filter(rew=> rew._id !== id)
    //                 setReviews(remaining);
    //             }
    //         })
    //     }
    // }
    return (

        <div>
            {/* {
                 reviews.map(review => <ReviewsCard key={review._id} review={review}handleDelete={handleDelete}></ReviewsCard>)
            } */}

        </div>
    );
};

export default Reviews;