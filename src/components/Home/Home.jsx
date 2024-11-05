import React from 'react';
import Banner from '../Banner/Banner';
import GadgetContainer from '../GadgetContainer/GadgetContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h3 className='my-10 text-6xl font-bold text-center'>Explore Cutting-Edge Gadgets</h3>
            <GadgetContainer></GadgetContainer>
        </div>
    );
};

export default Home;