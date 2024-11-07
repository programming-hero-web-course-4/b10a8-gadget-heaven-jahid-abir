import React, { useContext, useState } from 'react';
import { gadgetContext } from '../Home/Home';
import Gadget from '../Gadget/Gadget';

const GadgetContainer = () => {
    const [active, setActive] = useState('')
    const [clicked, setClicked] = useState([])
    const gadgets = useContext(gadgetContext)
    const handleClicked = (category) => {
        const filtered = gadgets.filter(gadget => gadget.category === category);
        setClicked(filtered)
        setActive(category)
    }
    return (
        <div className='flex mb-28 gap-6'>
            <div className='flex flex-col gap-4 p-6 border rounded-xl h-[400px]'>

                <button onClick={() => handleClicked('')} className={`px-3 py-2 font-bold border rounded-xl ${active === '' ? 'bg-primary text-white' : ''}`}>All Data</button>
                <button onClick={() => handleClicked('Phones')} className={`px-3 py-2 font-bold border rounded-xl ${active === 'Phones' ? 'bg-primary text-white' : '' }`}>Phone</button>
                <button onClick={() => handleClicked('Audio')} className={`px-3 py-2 font-bold border rounded-xl ${active === 'Audio' ? 'bg-primary text-white' : ''}`}>Audio</button>
                <button onClick={() => handleClicked('Laptops')} className={`px-3 py-2 font-bold border rounded-xl ${active === 'Laptops' ? 'bg-primary text-white' : ''}`}>Laptops</button>
                <button onClick={() => handleClicked('Wearable')} className={`px-3 py-2 font-bold border rounded-xl ${active === 'Wearable' ? 'bg-primary text-white' : ''}`}>Wearable</button>
                <button onClick={() => handleClicked('Cameras')} className={`px-3 py-2 font-bold border rounded-xl ${active=== 'Cameras' ? 'bg-primary text-white' : ''}`}>Cameras</button>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    clicked.length > 0 ? clicked.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>) : gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                }
            </div>
        </div>
    );
};

export default GadgetContainer;