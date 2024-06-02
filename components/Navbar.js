'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import logo from '@/public/logo.png'
import Darkmode from './Darkmode';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const session=useSession()
    const links = [{
        id : 1,
        url :session.status=='unauthenticated'?'/dashboard/login':'/dashboard',
        title : 'dashboard',

    }, {
        id : 2,
        url : '/contact',
        title : 'contact',
    }, {
        id : 3,
        url : '/blog',
        title : 'blog',
    }, ]
    return (
        <div className='w-full m-0'>
            <nav className=' border-solid border-emerald-700 shadow-sm shadow-emerald-700 justify-between mt-0 bg-emerald-700 p-3 rounded-sm flex text-white dark:bg-stone-900 dark:text-white w-full'>
            <div className='p-0 m-0'>
            <Link href= '/' className='mr-20 p-0'>
                <Image src={logo} width={100} height={100}/>
            </Link>
            </div>
           
     <div className='flex justify-between m-0 p-0'>
        <div className='mr-12 mt-6'><Darkmode/></div>
     
    {
    links.map((link)=>{return(<Link href={link.url} key={link.id} className='p-3 mb-0 mt-6 text-lg hover:text-blue-400 hover:p-4 hover:text-xl transition-all rounded-md'>{link.title}</Link>)}) 
    }
    {session.status=='authenticated'&&<button className=' bg-red-500 rounded-full h-1/2 px-2 ml-8 hover:bg-red-400 transition-all hover:animate-bounce shadow-sm shadow-red-600 text-sm' onClick={signOut}>{session.data.user.email} logout</button>}
     </div>
    </nav>
        </div>
    );
};

export default Navbar;
