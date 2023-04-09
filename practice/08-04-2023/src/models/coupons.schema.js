import mongoose from "mongose"

const couponSchema = new mongoose.Schema({
    code:{
        type:String,
        required:[true,"please provide a coupon code"]
    },
    discount:{
        type:Number,
        default:0
    },
    active:{
        type:String,
        default:true
    }
},{timestamps:true})



export default mongoose.model("Coupon", couponSchema)