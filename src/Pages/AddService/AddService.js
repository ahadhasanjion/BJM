import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify'
const AddService = () => {
    const {_id, title, description, img, price} = useLoaderData();
    const {user} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const img = form.img.value;

        const order = {

            service: _id,
            title,
            price,
            img,
            description,
        }
       
        fetch('https://bjm-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset()
        })
            
        .catch(error => console.error(error))
    }
    return (
            <div className='my-20 bg-teal-600 lg:px-48'>
                <form onSubmit={handleSubmit}>
                   <h2 className=' text-center text-4xl text-white'>Your order: {title}</h2>
                   <h4 className='text-center text-3xl pb-2 text-white'>Price: {price}</h4>
            
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3'>
                        <input name="img" type="text" placeholder="image" defaultValue={user?.name} className="input input-bordered w-full py-2 px-2 text-teal-600" required/>   
                        <input name="title" type="text" placeholder="title" defaultValue={user?.name} className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                        <input name="description" type="text" placeholder="Last Name" className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                        <input name="price" type="text" placeholder="Your Phone" className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                    </div>
                    <button class="group relative my-5 inline-block text-sm font-medium text-white focus:outline-none focus:ring active:text-teal-600">
                       <span class="absolute inset-0 border border-current"></span>
                       <span class="block border border-current bg-teal-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                       Submit
                       </span>
                     </button>
                </form> 
           </div>
    );
};

export default AddService;