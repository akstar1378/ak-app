'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const register = () => {
    const router=useRouter()
    const submithandler=async(e)=>{
        e.preventDefault()
                let username = document.getElementById('username')
                let email = document.getElementById('email')
                let password = document.getElementById('password')
                email= email.value;
                password= password.value;
                username= username.value;
                try{
        const res=await fetch('/api/auth/Register',{
            method:'POST',
            headers:{
                'content-type':'aplication/json'
            },
            body:JSON.stringify({email,password,username})
        })
        if(res.ok){router.push('/dashboard/login?success=user has been registered')}
                }
                catch(err){
        console.log(err)
                }
        }
    return (
        <div className='h-full flex justify-center p-6 m-0 dark:bg-cyan-950'>
            <form className='container grid grid-rows-5 rounded-md bg-emerald-500 text-black border-solid border-emerald-600 p-7 h-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 shadow-lg shadow-black '>
            <h1 className=' text-white font-serif mb-2 text-center text-2xl animate-bounce'>signin</h1>
username: <input type="username" className=' p-3 rounded-sm w-full  bg-emerald-100 shadow-sm shadow-black focus:p-4 transition-all delay-400'id='username' />
password :<input type="password" className=' p-3 rounded-sm w-full  bg-emerald-100 shadow-sm shadow-black focus:p-4 transition-all delay-400'id='password' />
email: <input type="email" className=' p-3 rounded-sm w-full  bg-emerald-100 shadow-sm shadow-black focus:p-4 transition-all delay-400'id='email' />
<button className=' bg-sky-500 border-solid rounded-md shadow-sm shadow-sky-600 p-3 mt-4 w-full  hover:bg-sky-300 transition-all text-lg'onClick={submithandler}>register</button>
            </form>
        </div>
    );
};

export default register;