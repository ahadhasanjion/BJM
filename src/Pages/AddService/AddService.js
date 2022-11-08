import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddService = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email =user?.email || 'unregister';
        const message = form.message.value;
        const order = {

            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        }
    }
    return (
            <div className='my-20 bg-teal-600 lg:px-48'>
                <form onSubmit={handleSubmit}>
                   <h2 className=' text-center text-4xl text-white'>Your order: {title}</h2>
                   <h4 className='text-center text-3xl pb-2 text-white'>Price: {price}</h4>
            
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3'>
                        <input name="firstName" type="text" placeholder="First Name" defaultValue={user?.name} className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                        <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                        <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                        <input name="email" type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full py-2 px-2 text-teal-600" readOnly/>
                    </div>
                    <textarea name="message" className="textarea textarea-bordered w-full lg:py-8 mt-5 text-teal-600" placeholder="Your Message " required>Your Message</textarea>

                    <a class="group relative my-5 inline-block text-sm font-medium text-white focus:outline-none focus:ring active:text-teal-600" href="/">
                       <span class="absolute inset-0 border border-current"></span>
                       <span class="block border border-current bg-teal-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                       Submit
                       </span>
                     </a>
                </form> 
           </div>
    );
};

export default AddService;