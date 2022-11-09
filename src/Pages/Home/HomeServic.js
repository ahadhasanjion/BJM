import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';


const HomeServic = ({services}) => {
    return (
        <div className='mb-20'>
        <div className='grid grid-col1 lg:grid-col-3 md:grid-cols-3 mx-40 mb-8'>
            {
                services.map(service=> <ServiceCard  service={service} ></ServiceCard>)

            }
        </div>
          <Link to='/services' class="group relative inline-block text-sm font-bold mt-8 text-white focus:outline-none focus:ring active:text-teal-600" href="/download">
                  <span class="absolute inset-0 border border-current"></span>
                  <span class="block border border-current bg-teal-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                      All sService
                  </span>
          </Link>
          </div>
         
    );
};

export default HomeServic;