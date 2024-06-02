'use client'
import { useRouter } from 'next/navigation';
   const Information = ({post,alertpasser}) => {
    const router=useRouter()
    const {username,title,_id}=post
    return ( 
    <div className=' shadow-md shadow-slate-300 rounded-sm'>
        <div className = 'border-black mb-0 p-3 rounded-lg flex justify-between' > <h1> title: { title } </h1> < h1 > post by: { username } </h1>
        <button className='border-black p-2 text-white bg-red-500 rounded-lg hover:bg-red-600 active:bg-red-800' onClick={async function deleteData(){
    const res= await fetch(`http://localhost:3000/api/Delete/${_id}`,{method:'DELETE'})
    if(res.ok){
        window.location.pathname='/dashboard'
        router.refresh(window.location.pathname);
alertpasser(true)
    }
    if (!res.ok) {
     throw new Error('Failed To Fetch')
    }
   }}>delete</button> 
        </div> 
        <hr/>
        </div>
    );
};

export default Information;