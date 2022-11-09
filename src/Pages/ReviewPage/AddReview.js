import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AddReview = ({service}) => {
    const [review, setReview] = useState()
    const {user} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL= form.photoURL.value
        const email =user?.email || 'unregister';
        const message = form.message.value;

        const review =  {
            reviewerName:name,
            serviceTitle: service.title,
            serviceId : service._id,
            message:message,
            email:email,
            photoURL:photoURL,
        }
        fetch(`http://localhost:5000/reviews`, {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log(data))


        fetch(`http://localhost:5000/reviews/${service._id}`)
        .then(res => res.json())
        .then(data => setReview(data))
    }
    return (
        <div>
           
            <div>
            <div className='my-20 bg-teal-600 lg:px-48'>
                <form onSubmit={handleSubmit}>
                   <h2 className=' text-center text-4xl text-white'>Add Review</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3'>
                        <input name="firstName" type="text" placeholder="First Name"  className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                        <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                        <input name="email" type="email" placeholder="Your Email" className="input input-bordered w-full py-2 px-2 text-teal-600" />
                        <input name="photoURL" type="text" placeholder="PhotoURL"className="input input-bordered w-full py-2 px-2 text-teal-600"/>
                    </div>
                    <textarea name="message" className="textarea textarea-bordered w-full lg:py-8 mt-5 text-teal-600" placeholder="Your Message " required>Your Message</textarea>

                    <button class="group relative my-5 inline-block text-sm font-medium text-white focus:outline-none focus:ring active:text-teal-600">
                       <span class="absolute inset-0 border border-current"></span>
                       <span class="block border border-current bg-teal-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                       Submit
                       </span>
                     </button>
                </form> 
           </div>
            </div>
        </div>
    );
};

export default AddReview;