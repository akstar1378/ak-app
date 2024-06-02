import React from 'react';
import Class from '../components/Class';
import Link from 'next/link';
const Blog = ({data}) => {
    return (
        <div className=' dark:bg-cyan-950'>
             <div className=' dark:bg-cyan-950'>
            <div className='container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 w-full h-4/5 justify-evenly flex-nowrap'> 
            {data && data.map(post => {
                  return(<Link className='p-0 ml-2 rounded-lg mb-7 hover:p-4 transition-all' key={post._id} href={`/blog/${post._id}`}><Class post={post}/></Link>)
                  
            })
            }
            </div>
           
        </div>
        </div>
    );
};

export default Blog;