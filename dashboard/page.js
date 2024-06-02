'use client'
import React, {useState,useEffect } from 'react';
import Information from '../components/Information';
import { notFound, useRouter } from 'next/navigation';
import Alertt from '../components/Alertt';
import { useSession } from 'next-auth/react';
import Loading from '../components/Loading';


const dashboard = () => {
    const[data,setData]=useState()
    const router=useRouter()
    const [isLoading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:3000/api/Post',{method:'GET'})
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
            if(!data){
                return notFound()
            }
          })
      }, [isLoading])
    const[alert,setAlert]=useState(false)
    const alertpasser=(value)=>{
        setAlert(value)
    }
    const session=useSession()
    const submithandler=(e)=>{
        setLoading(true)
        e.preventDefault();
        let title= document.getElementById('title')
        let username = document.getElementById('username')
        let image = document.getElementById('image')
        let content = document.getElementById('content')
        let desc= document.getElementById('desc')
        desc= desc.value;
        title= title.value;
        username= username.value;
        content= content.value;
        image= image.value;
            // const query = 
            fetch('api/auth/Post', {
                method: 'POST',
                body: JSON.stringify({username,title,content,image,desc})})
                .then((response) => response)
                .then((data) => console.log(data));
                router.refresh()}
              
                   
                
//        async  function getData() {
//             const res = await fetch('http://localhost:3000/api/Post', {
//                 cache :"no-store"})
//             if (!res.ok) {
// return notFound()
// }
//             return res.json();}
        // const data= await getData()
    return ( 
        <div className = 'border-black  p-5 dark:bg-cyan-950 dark:text-white'>
          <div className='p-1 mb-2'> {alert===true&&<Alertt/>}</div> 
            <div className='mt-2'><h1  className='p-2 text-3xl animate-bounce drop-shadow-md drop-shadow-black'>add new post </h1></div>
        <hr/>
        <form className='border-black border-2 border-solid mb-3 p-4 rounded-xl shadow-md shadow-black mt-2 grid sm:grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-sky-600'>
            <div><label > title: </label> 
        <input type = 'text'className = 'border border-green-800 rounded-lg p-1 m-2 shadow-md shadow-black focus:p-2 transition-all delay-400' placeholder='title'id='title' /></div>
            <div> <label > username: </label> 
        <input type = 'text'className = 'border border-green-800 rounded-lg p-1 m-2 shadow-md shadow-black focus:p-2 transition-all delay-400' id='username' /> </div>  
            <div><label > descreption: </label> 
        <input type = 'text'className = 'border border-green-800 rounded-lg p-2 m-2 shadow-md shadow-black focus:p-3 transition-all delay-400' id='desc' /> </div>
            <div><label > image url: </label> 
        <input type = 'text'className = 'border border-green-800 rounded-lg p-1 m-2 shadow-md shadow-black focus:p-2 transition-all delay-400' placeholder='image url' id='image' /> </div>
            <div><label > content:</label> 
        <input type = 'text'className = 'border border-green-800 rounded-lg p-5 w-3/4 m-2 border-black shadow-md shadow-black'id='content' /> </div>
         <button type='button'onClick={submithandler} className=' w-1/4 ml-2 border p-2 bg-green-800 rounded-lg transition-all hover:bg-sky-500 active:bg-sky-800 shadow-md shadow-green-600 focus:ring text-white text-xl'> submit</button>
        </form>
        {isLoading&&<Loading/>}
        <div className='mt-8 p-6 border-black'>{data&&data.map((post)=>{return <Information key={post._id} post={post} alertpasser={alertpasser}/>})}</div>
        </div>
    );
};

export default dashboard;