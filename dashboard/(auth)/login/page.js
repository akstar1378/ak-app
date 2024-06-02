'use client'
import React from 'react';
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const submithandler=(e)=>{
    e.preventDefault()
            let username = document.getElementById('username')
            let email = document.getElementById('email')
            let password = document.getElementById('password')
            email= email.value;
            password= password.value;
            username= username.value;
        signIn('credentials',{email,password})}

const login = () => {
    const session =useSession()
    const router=useRouter()
    console.log(session)
    if(session.status=='authenticated'){
router.push('/dashboard')
    }
    return (
        <div className='h-full flex justify-center p-20 dark:bg-cyan-950'>
<form className='container grid grid-rows-6 rounded-lg bg-emerald-500 text-black sm:w-1/3 lg:w-1/4 xl:w-1/5 border-solid border-emerald-600 p-7 h-1/2 shadow-lg shadow-black'>
            <h1 className=' text-white font-serif mb-2 text-center text-2xl animate-bounce'>login panel</h1>
username: <input type="username" className=' p-3 rounded-lg w-full bg-emerald-100 shadow-sm shadow-black focus:p-4 transition-all delay-400'id='username' />
password :<input type="password" className=' p-3 rounded-lg w-full bg-emerald-100 shadow-sm shadow-black focus:p-4 transition-all delay-400'id='password' />
email: <input type="email" className=' p-3 rounded-lg w-full mt-2 bg-emerald-100 shadow-sm shadow-black focus:p-4 transition-all delay-400' id='email'/>
<button className=' bg-sky-500 border-solid rounded-md shadow-sm shadow-sky-600 p-3 mt-7 mb-4 w-full hover:bg-sky-300 transition-all text-lg' onClick={submithandler}>login</button>
do not have an acount? <Link href={'/dashboard/register'} className=' text-blue-500'> signin</Link>
            </form>
        </div>
    );
};

export default login;