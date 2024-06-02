import mongoose, { Schema } from "mongoose";


const postSchema = new Schema({
    title: {
        type: String,
        requierd: true
    },
    image: {
        type: String,
        requierd: true
    },
    username: {
        type: String,
        requierd: true
    },
    desc: {
        type: String,
        requierd: true
    },
    content: {
        type: String,
        requierd: true
    },
}, { timeseries: true })
export default mongoose.models.Post || mongoose.model('Post', postSchema)