import mongoose from "mongoose";
const connect = async()=>{
    try{
await mongoose.connect('mongodb+srv://arshiakheirandish78:M636Te4TjVcXLBt6@cluster0.laozxii.mongodb.net/test?retryWrites=true&w=majority')
    }
    catch(error){
console.log(error,'there is some error')
    }
}
export default connect;