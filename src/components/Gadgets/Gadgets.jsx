import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets,setGadgets] = useState([])
    useEffect(()=>{
        fetch('gadget.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-8 mb-28'>
            {
                gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default Gadgets;