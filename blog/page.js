
import { notFound } from 'next/navigation';
import Blog from '../components/Blog';
export const metadata={
    title:'blog'
}
async function getData() {
    const res = await fetch('http://localhost:3000/api/Post', {
        cache:'force-cache',
    next:{revalidate:30}
    })

    if (!res.ok) {
       return notFound()
    }

    return res.json();
}
const blog = async() => {
    const data = await getData()
    return (
        <div className=' dark:bg-cyan-950'>
            <Blog data={data}/>
        </div>
    );
        }
export default blog;