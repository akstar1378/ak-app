import Post from "@/app/models/Post"
import connect from "@/app/utils/db"
import { NextResponse } from "next/server"

export const DELETE = async(request, { params }) => {
    const { id } = params
    try {
        await connect()
        const posts = await Post.findByIdAndDelete(id)
        return new NextResponse('ok', { status: 200 })
    } catch (err) {
        return new NextResponse('Database Error ' + err, { status: 500 })

    }
}