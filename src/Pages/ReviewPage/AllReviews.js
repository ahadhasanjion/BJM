// import React, { useEffect, useState } from 'react';
// import AllReviewsInfo from './AllReviewsInfo';

// const AllReviews = () => {
//     const [reviews, setReviews] = useState([])
//     useEffect(() => {
//         fetch('http://localhost:5000/reviews')
//             .then(res => res.json())
//             .then(data => setReviews(data))
//     }, [])

//     return (
//         <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 text-teal-600">
//             <table className="table w-full">
//                 <thead>
//                     <tr>
//                         <th>

//                         </th>
//                         <th>Pic</th>
//                         <th>Name</th>
//                         <th>Review</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         reviews.map(review => <AllReviewsInfo
//                             key={review._id}
//                             review={review}
//                         ></AllReviewsInfo>)
//                     }
//                 </tbody>

//             </table>
//         </div>
//     );
// };

// export default AllReviews;