import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewsCard from '../ReviewPage/ReviewsCard';
// import Reviews from '../ReviewPage/Reviews';


const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData()
    const {img, title, description, price, _id} = service;
    const [serviceReview, setServiceReview] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:5000/review?service_id=${_id}`)
        .then(res => res.json())
        .then(data => setServiceReview(data))
     }, [_id])

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoUrl= form.photoUrl.value;
        const email =user?.email || 'unregister';
        const message = form.message.value;

        const review =  {
            reviewerName:name,
            title: service.title,
            service_id : _id,
            message:message,
            email:email,
            photoUrl:photoUrl,
        }
        fetch(`http://localhost:5000/reviews`, {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                alert('Review Posted')
                window.location.reload(false);
                form.reset();
            }
        })
        .catch(error=> console.error(error))

    }

    
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


            <div className='mx-auto'>
                <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
               {
                serviceReview.map(rev => <ReviewsCard  ke={rev._id} rev={rev}></ReviewsCard>)
               }
          </tbody>
          
        </table>
            </div>










                {/* {
                    serviceReview.map(rev => <AllReviewsInfo key={rev._id} rev={rev}></AllReviewsInfo>)
                } */}
        

            {/* <div>
                <Reviews></Reviews>
            </div> */}


            <div className="mx-auto">
            <div>
           
           <div>
           <div className='my-20 bg-teal-600 lg:px-48'>
               <form onSubmit={handleSubmit}>
                  <h2 className=' text-center text-4xl text-white'>Add Review</h2>
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3'>
                       <input name="name" type="text" placeholder=" Name"  className="input input-bordered w-full py-2 px-2 text-teal-600" required/>
                       <input name="email" type="email" placeholder="Your Email" className="input input-bordered w-full py-2 px-2 text-teal-600" />
                       <input name="photoUrl" type="text" placeholder="PhotoUrl"className="input input-bordered w-full py-2 px-2 text-teal-600"/>
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
            </div>
        </div>
       

    );
};

export default ServiceDetails;