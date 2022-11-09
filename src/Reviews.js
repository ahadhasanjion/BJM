import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useSetTitle from '../../../hooks/useSetTitle';
import ReviewInfo from './ReviewInfo';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    // এইটা দিয়ে ডাটাবেজে সেভ থাকা ইউজাররা তাদের ইমেল অনুযায়ি রিভিউ গুলা পেয়ে যাবে । সব রিভিউ কিন্তু আসবে না। 
    useEffect(() => {
        fetch(`http://localhost:5001/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    // delete handler in the parent component
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure, you want to delete this Review')
        if (proceed) {
            fetch(`http://localhost:5001/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Review Deleted Successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }


    useSetTitle('My Review')
    return (
        <div>
            <h2 className='text-5xl'>You Have {reviews.length} Review</h2>
            {reviews.length === 0 ?
                <><p>please add sonething</p></>
                :
                <>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th>

                                    </th>
                                    <th>User Info</th>
                                    <th>Package Info</th>
                                    <th>Review Details</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(review => <ReviewInfo
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                    ></ReviewInfo>)
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