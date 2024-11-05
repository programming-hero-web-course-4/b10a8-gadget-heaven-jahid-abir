import React, { useContext} from 'react';
import Gadget from '../Gadget/Gadget';
import { gadgetContext } from '../Home/Home';

const Gadgets = () => {
    const gadgets = useContext(gadgetContext)
    return (
        <div className='grid grid-cols-3 gap-8 mb-28'>
            {
                gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
            }
        </div>
    );
};

export default Gadgets;