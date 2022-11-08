import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
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