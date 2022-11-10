import React from 'react';
import useTitle from '../../TitleHook/useTitle';

const Stats = () => {
  useTitle('Stats')
    return (
        <div>
             <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 pt-24">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-3">
        <div class="text-center md:border-r pb-16">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-teal-600">1.4k+</h6>
          <p class="text-sm font-medium tracking-widest text-teal-600 uppercase lg:text-base">
            Clients
          </p>
        </div>
        <div class="text-center md:border-r pb-16">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-teal-600">100</h6>
          <p class="text-sm font-medium tracking-widest text-teal-600 uppercase lg:text-base">
            Warehouses
          </p>
        </div>
        <div class="text-center md:border-r pb-16">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-teal-600">250</h6>
          <p class="text-sm font-medium tracking-widest text-teal-600 uppercase lg:text-base">
            Car
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-teal-600">150</h6>
          <p class="text-sm font-medium tracking-widest text-teal-600 uppercase lg:text-base">
            Schools
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl text-teal-600">300</h6>
          <p class="text-sm font-medium tracking-widest text-teal-600 uppercase lg:text-base">
          Residential Buildings
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold text-teal-600 lg:text-5xl xl:text-6xl">400</h6>
          <p class="text-sm font-medium text-teal-600 tracking-widest  uppercase lg:text-base">
            Corporate Buildings
          </p>
        </div>
        
      </div>
    </div>
        </div>
    );
};

export default Stats;