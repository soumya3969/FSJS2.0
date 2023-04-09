import mongoose from 'mongoose';
const orderSchema = new mongoose.OrderSchema({
    product:{
        type:[
            {

            }
        ],
        required: true
    },
    user:{
        type: mongoose.Schema.types.ObjectId,
        ref: "User",
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phoneNumber:{
        type:Number,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    coupon:String,
    transactionId:String,
    status:{
        type:String,
        enum:["ORDERED", "SHIPPED", "DELIVERED", "CANCELLED"],
        //TODO:TRY BETTER WAY
        default: "ORDERED"
    }
}, {timestamp: true})

export default mongoose.model("order",orderSchema)