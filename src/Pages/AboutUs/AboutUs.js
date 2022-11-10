import React from 'react';
import useTitle from '../../TitleHook/useTitle';

const AboutUs = () => {
  useTitle('About Us')
    return (
    
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-teal-600">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-4xl font-bold tracking-wider text-white uppercase rounded-full bg-teal-accent-400 ">
            Our Team
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            
          </p>
        </div>
        <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-white">Oliver Aguilerra</p>
              <p className="text-sm text-white font-semibold">CEO</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-white">Marta Clermont</p>
              <p className="text-sm text-white font-semibold">Head Of Marketing Department</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-white">Anthony Geek</p>
              <p className="text-sm text-white font-semibold">CTO</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-white">Alice Melbourne</p>
              <p className="text-sm text-white font-semibold">Human Resources</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-white">Martin Garix</p>
              <p className="text-sm text-white font-semibold">President</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-white">Andrew Larkin</p>
              <p className="text-sm text-white font-semibold">Head Of EU</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-white">Sophie Denmo</p>
              <p className="text-sm text-white font-semibold">Operation Head</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-white">Benedict Caro</p>
              <p className="text-sm text-white font-semibold">North America Head</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;