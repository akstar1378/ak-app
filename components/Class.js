'use client'
import React from 'react';
const Class = ({post}) => {
   const {image,username,title,desc,} =  post
    return (
        <div className=' border-s-black shadow-md shadow-slate-600 p-0 rounded-xl m-0  h-full'>
            <figure className='rounded-xl bg-slate-600 p-5 h-full'>
            <img className="w-24 h-20 md:w-full md:h-auto md:rounded-none rounded-full ml-0 mr-0 mb-auto" src={image} alt="" width="384" height="512"/>
  <div className="pt-6 md:p-7 text-center md:text-left space-y-4">
    <blockquote className='overflow-hidden'>
    <h1 className='font-large text-xl text-rose-400'>{title}</h1>
    </blockquote>
    <hr/>
    <figcaption className="font-medium mt-2">
      <div className="text-black dark:text-white">
       {desc}
      </div>
      <div className=" text-sky-500 dark:text-slate-500">
        atour : {username}
      </div>
    </figcaption>
  </div>
            </figure>
        </div>
    );
};

export default Class;