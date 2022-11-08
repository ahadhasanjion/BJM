import React from 'react';
import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';
import WorkingProcess from '../WorkingProcess/WorkingProcess';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <WorkingProcess></WorkingProcess>
        </div>
    );
};

export default Home;