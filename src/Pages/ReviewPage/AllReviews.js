import React from 'react';

const AllReviews = ({review}) => {
    const {message, reviewerName, photoUrl} = review;
    return (
        <div>
            <tr>
    
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
            </tr>           
        </div>
    );
};

export default AllReviews;