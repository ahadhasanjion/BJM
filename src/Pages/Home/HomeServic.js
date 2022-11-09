import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';


const HomeServic = ({services}) => {
    return (
        <div className='mb-20'>
            <h1 className='text-teal-600 font-bold text-4xl'>Services</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mb-8 gap-5 mx-20'>
            {
                services.map(service=> <ServiceCard  service={service} ></ServiceCard>)

            }
        </div>
          <Link to='/services' class="group relative inline-block text-sm font-bold mt-8 text-teal-600 focus:outline-none focus:ring active:text-teal-600" href="/download">
                  <span class="absolute inset-0 border border-current"></span>
                  <span class="block border border-current  px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                      All Service
                  </span>
          </Link>
          </div>
         
    );
};

export default HomeServic;