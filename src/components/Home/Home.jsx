import React, { createContext ,useEffect, useState} from 'react';
import Banner from '../Banner/Banner';
import GadgetContainer from '../GadgetContainer/GadgetContainer';

export const gadgetContext = createContext()
const Home = () => {
    const [gadgets,setGadgets] = useState([])

    useEffect(()=>{
        fetch('gadget.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    },[])

    return (
       <gadgetContext.Provider value={gadgets}>
         <div>
            <Banner></Banner>
            <h3 className='my-10 text-6xl font-bold text-center'>Explore Cutting-Edge Gadgets</h3>
            <GadgetContainer></GadgetContainer>
        </div>
       </gadgetContext.Provider>
    );
};

export default Home;