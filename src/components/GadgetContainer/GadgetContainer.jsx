import React from 'react';
import GadgetBtn from '../GadgetBtn/GadgetBtn';
import Gadgets from '../Gadgets/Gadgets';

const GadgetContainer = () => {
    return (
        <div className='flex gap-6'>
            
            <GadgetBtn></GadgetBtn>
            <Gadgets></Gadgets>
        </div>
    );
};

export default GadgetContainer;