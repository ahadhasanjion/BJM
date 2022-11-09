import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import AddReview from '../ReviewPage/AddReview';
import Reviews from '../ReviewPage/Reviews';


const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const {addedreviews, setAddedReviews} = useState({})
    const service = useLoaderData()
    const {img, title, description, price} = service
    return (
        <div>
            <article class="flex bg-teal-600 transition hover:shadow-xl mx-48 mb-8">
                <div class="hidden sm:block sm:basis-56">
                    <img alt="Guitar"src={img} class="aspect-square h-full w-full object-cover"/>
                </div>
                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-l  p-4 sm:border-l-transparent sm:p-6"> 
                        <h3 class="font-bold text-3xl uppercase text-white text-start">
                            {title}
                        </h3>
                        <p class="mt-2 text-xl font-normal leading-relaxed text-white text-start line-clamp-3 pt-3">
                         {description}
                        </p>
                        <p className='text-white font-normal text-start text-xl pt-3'>Price: {price}</p>
                    </div>
                </div>
            </article>
            <div>
                <Reviews></Reviews>
            </div>
            <div className="mx-auto">
                <AddReview service={service}></AddReview>
            </div>
        </div>
       

    );
};

export default ServiceDetails;