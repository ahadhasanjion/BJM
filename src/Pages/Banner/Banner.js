import React from 'react';
import bannerImg from '../../Assets/banner_bg-1.svg';
import img from '../../Assets/banner1.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-teal-600">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12  md:bottom-0 lg:absolute xl:px-0">
        
        <img
          className="object-cover md:justify-center h-full rounded md:bottom-0 md:max-w-full  lg:rounded-none lg:shadow-none md:h-full lg:h-full -mb-16"
          src={img}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-start">
          Reliable cleaning agency with best equipment

          </h2>
          <p className="pr-5 mb-5 text-base text-white font-normal md:text-lg">
            We are the best cleaning company in Europe. we have experience of 15 years in the industry.
          </p>
          <div className="flex items-center">
          <Link to='/services' class="group relative inline-block text-sm font-bold mt-8 text-white focus:outline-none focus:ring active:text-teal-600" href="/download">
                    <span class="absolute inset-0 border border-current"></span>
                    <span class="block border border-current bg-teal-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                        Our Services
                    </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;