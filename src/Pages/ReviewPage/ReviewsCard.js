import React, { useState }  from 'react';
import toast from 'react-hot-toast';

const ReviewsCard = ({rev}) => {
    const {reviewerName, message, photoUrl, _id,} = rev;
    const [reviews, setReviews] = useState([]);
    const handleDelete = id =>{
        const proceed = window.confirm('are you sure you want to delete reviews');
        if(proceed){
            fetch(`https://bjm-server.vercel.app/reviews/${id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount > 0){
                    toast.success('deleted successfully')
                }
                const remaining = reviews.filter(r => r._id !== id)
                    setReviews(remaining);
            })
        }
    }
    
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{}</div>
              <div className="text-sm opacity-50">{reviewerName}</div>
            </div>
          </div>
        </td>
        <td>
          <p>{message}</p>
        </td>
      </tr>
    );
};

export default ReviewsCard;