import Post from "@/app/models/Post"
import connect from "@/app/utils/db"
import { NextResponse } from "next/server"

export const GET = async(request, { params }) => {
    const { id } = params
    try {
        await connect()
        const posts = await Post.findById(id)
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (err) {
        return new NextResponse('Database Error ' + err, { status: 500 })

    }
}