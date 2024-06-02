
import { notFound } from 'next/navigation';
import React from 'react';
async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/Post/${id}`, {
        cache:'no-cache',
        // next:{revalidate:5}
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json();
}
    
const Blogid = async({params}) => {
const data= await getData(params.id)
    return (
        <div className=' dark:bg-cyan-950 mt-0'>
            <div className='w-4/5 h-96 mt-2 mb-8 p-0 rounded-lg container shadow-lg shadow-black'><img src={data.image} className='w-full h-96 rounded-lg'/></div>
            <div className='w-full mt-6 p-3 text-black grid grid-rows-2 rounded-md'>
            <h1 className=' row-span-1 row-end-1 text-center text-2xl font-serif font-bold p-2 border-solid shadow-md mb-4 mt-3 rounded-md bg-sky-100'>{data.title}</h1>
            <div className='row-span-3 p-8 mb-0 w-full bg-cyan-400 text-base border-solid shadow-lg rounded-lg'>{data.content}</div>
            </div>
            
        </div>
    );
};

export default Blogid;