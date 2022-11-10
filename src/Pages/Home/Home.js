import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';
import WorkingProcess from '../WorkingProcess/WorkingProcess';
import HomeServic from './HomeServic';


const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <WorkingProcess></WorkingProcess>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                 <HomeServic services={services}></HomeServic>
            </div>
        </div>
    );
};

export default Home;