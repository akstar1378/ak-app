import User from "@/app/models/User"
import connect from "@/app/utils/db"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

export const POST = async(request) => {
    const { email, username, password } = await request.json()
    await connect()
    const hashedpassword = await bcrypt.hash(password, 5)
    const newUser = new User({
        email,
        username,
        password: hashedpassword,
    })
    try {

        await newUser.save()
        return new NextResponse('sucsses', { status: 200 })
            // console.log('hi');
    } catch (error) {
        return new NextResponse('error ' + error, { status: 500 })
    }
}