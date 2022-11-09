import React, { useEffect, useState } from 'react';

const ReviewInfo = ({ review, handleDelete }) => {
    const { serviceName, price, reviews, email, photoUrl, customer, service, _id } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5001/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        ❌
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
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50"> {email} </div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">$ {price} </span>
            </td>
            <td><p>{reviews}</p></td>
            <th>
                <button

                    className="btn btn-ghost btn-xs">{'Edit'}</button>
            </th>
        </tr>
    );
};

export default ReviewInfo;