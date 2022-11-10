import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import toast  from 'react-hot-toast'
import useTitle from '../../TitleHook/useTitle';
const AddService = () => {
    useTitle('Add Service')
    const [services, setServices] = useState({});
     const current = new Date().toLocaleString();
    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newServices = { ...services, current };
        newServices[field] = value;
        setServices(newServices);
    };
    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('https://bjm-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(services)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged)
            toast('Service Added')
            event.target.reset()
        })
            
        .catch(error => console.error(error))
    }
    return (
            <div className='my-20 bg-teal-600 lg:px-48 mt-8'>
                <form onSubmit={handleSubmit} className="mt-7">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3'>
                        <input onBlur={handleOnBlur} name="img" type="text" placeholder="image" className="input input-bordered w-full py-2 px-2 text-teal-600" required/>   
                        <input onBlur={handleOnBlur} name="title" type="text" placeholder="title" className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                        <input onBlur={handleOnBlur} name="description" type="text" placeholder="add description" className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                        <input onBlur={handleOnBlur} name="price" type="text" placeholder="price" className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
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