import React, { createContext ,useEffect, useState} from 'react';
import Banner from '../Banner/Banner';
import GadgetContainer from '../GadgetContainer/GadgetContainer';
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <h3 className='my-10 md:text-6xl text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h3>
            <GadgetContainer></GadgetContainer>
        </div>
       </gadgetContext.Provider>
    );
};

export default Home;