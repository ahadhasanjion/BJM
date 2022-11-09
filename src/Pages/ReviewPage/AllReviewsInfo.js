import React from 'react';

const AllReviewsInfo = ({ review }) => {
    const { reviewerName,  message ,photoUrl, } = review;
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
                        <div className="font-bold">{reviewerName}</div>
                    </div>
                </div>
            </td>
            
            <td><p>{message}</p></td>

        </tr>
    );
};

export default AllReviewsInfo;