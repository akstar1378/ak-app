import connect from "@/app/utils/db"
import Post from "@/app/models/Post"
import { NextResponse } from "next/server"
export const POST = async(request) => {
    const { username, title, desc, image, content } = await request.json();
    const newPost = new Post({
        username,
        title,
        desc,
        image,
        content,
    })

    try {
        await connect();
        await newPost.save()
        return new NextResponse({ status: 200 })
            // console.log('hi');
    } catch (error) {
        return new NextResponse('error ' + error, { status: 500 })
    }

}