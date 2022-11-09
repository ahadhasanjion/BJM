import React, { useEffect, useState } from 'react';

const ReviewsCard = ({review, handleDelete}) => {
    const {reviewerName, message, photoUrl, service, _id} = review;
    const {reviewservice, setReviewService} = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.send.json())
        .then(data => setReviewService(data))
    },[service])
    return (
        <tr>
        <th>
            <label>
              <button onClick={()=> handleDelete(_id)} className='btn btn-ghost'>x</button>
            </label>
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask rounded-full w-20 h-20">
                       <img src={photoUrl} alt="reviewer pic"/>
                    </div>
                </div>
                <div>
                    <div className="font-bold">{reviewerName}</div>
                    <div className="text-sm opacity-50">{message}</div>
                </div>
            </div>
        </td>
        <th>
            <button className='btn btn-ghost btn-xs'>{'Edit'}</button>
        </th>
    </tr>
    );
};

export default ReviewsCard;