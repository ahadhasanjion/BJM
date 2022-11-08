import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCard = ({service}) => {
    const {_id,img, title, price, description} = service;
    return (
        <div className='mx-auto mt-6'>
            <div className="p-6 rounded-md shadow-md bg-teal-600 text-white max-w-sm">
                <PhotoProvider>
                    <PhotoView src={img}>
                    <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>
	            
	            <div className="mt-6 mb-2">
		            <h2 className="text-xl font-bold tracking-wide">{title}</h2>
	            </div>
	            <p className="dark:text-gray-100">
                {
                    description.length > 100 ?
                    <p>{description.slice(0, 100) +'...'}<Link className='font-bold  text-white' to={`/details/${_id}`}></Link></p>
                    :
                    <p>{description}</p>
                  }
                </p>
                <Link to={`/details/${_id}`} class="group relative inline-block text-sm font-bold mt-8 text-white focus:outline-none focus:ring active:text-teal-600" href="/download">
                    <span class="absolute inset-0 border border-current"></span>
                    <span class="block border border-current bg-teal-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                        View Details
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;