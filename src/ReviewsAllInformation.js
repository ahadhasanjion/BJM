import React from 'react';

const ReviewsAllInformation = ({ review }) => {
    const { serviceName, price, reviews, email, photoUrl, customer, service } = review;
    return (
        <tr>
            <th>

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

        </tr>
    );
};

export default ReviewsAllInformation;