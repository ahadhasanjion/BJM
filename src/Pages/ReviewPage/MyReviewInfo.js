import React  from 'react';
import useTitle from '../../TitleHook/useTitle';

const MyReviewInfo = ({ review, handleDelete }) => {
    useTitle('My Review')
    const { reviewerName, message, photoUrl, _id } = review;


    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(review)} className="btn btn-circle btn-outline">
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
                        <div className="font-bold">{reviewerName}</div>
                    </div>
                </div>
            </td>
            
            <td><p>{message}</p></td>
            <th>
                <button

                    className="btn btn-ghost btn-xs">{'Edit'}</button>
            </th>
        </tr>
    );
};

export default MyReviewInfo;