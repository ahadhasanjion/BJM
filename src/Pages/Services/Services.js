import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ServiceCard from './ServiceCard';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://bjm-server.vercel.app/services')
        .then(res => res.json())
        .then(data =>{ 
                setLoading(false);
                setServices(data)
           })
    },[])
    if(loading){
        return <Loader></Loader>
    }
    return (
        <div className='mb-20 mx-auto'>
            <div className='text-center mx-auto w-96 mb-4 mt-8'>
                <p className='text-teal-600 font-bold text-4xl'>Our Services</p>
            </div>
            <div className='services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto gap-4'>
               {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Services;