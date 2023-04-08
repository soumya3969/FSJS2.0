import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: ["true", "please provide a product name"],
        trim:true,
        maxLength:[120,"product name should not be more than 120 characters"]
    },
    price:{
        type: Number,
        required: ["true", "please provide a product price"],
        maxLength:[5,"product price should not be more than 5 digits"]
    },
    photos:[
        {
            secure_url:{
                type: String,
                required: true,
            }
        }
    ],
    stock:{
        type:Number,
        default:0
    },
    sold:{
        type: Number,
        default:0
    },
    collectionId:{
        ref:"collection"
    }

},{timestamp:true});




export default mongoose.model('Product',productSchema);