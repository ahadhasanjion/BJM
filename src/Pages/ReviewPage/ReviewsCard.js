import React from 'react';

const ReviewsCard = ({review, handleDelete}) => {
    const {reviewerName, message, photoUrl, _id,} = review;

    return (
        <tr className='mx-40'>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline bg-teal-600 text-white">
                        X
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded-full w-20 h-20">
                            <img src={photoUrl} className="" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-teal-600">{reviewerName}</div>
                    </div>
                </div>
            </td>
            
            <td><p className='text-teal-600 font-normal'>{message}</p></td>
            <th>
                <button

                    className="btn btn-ghost btn-xs text-teal-600">{'Update Reviews'}</button>
            </th>
        </tr>
    );
};

export default ReviewsCard;