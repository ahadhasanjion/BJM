import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../TitleHook/useTitle';
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
            <HomeServic services={services}></HomeServic>
            
        </div>
    );
};

export default Home;