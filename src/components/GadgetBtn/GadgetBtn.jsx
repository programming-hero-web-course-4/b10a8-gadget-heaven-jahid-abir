import React from 'react';

const GadgetBtn = () => {
    return (
        <div className='flex flex-col gap-4 p-6 border rounded-xl h-[400px]'>
           <button className='px-3 py-2 font-bold border rounded-xl'>Phone</button> 
           <button className='px-3 py-2 font-bold border rounded-xl'>Laptop</button> 
           <button className='px-3 py-2 font-bold border rounded-xl'>Audio</button> 
           <button className='px-3 py-2 font-bold border rounded-xl'>Camera</button> 
        </div>
    );
};

export default GadgetBtn;