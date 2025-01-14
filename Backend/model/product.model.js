import mongoose from "mongoose";

// Create Schemas
const productSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    price : {
        type: Number,
        required : true
    },
    category : {
        type: String,
        required : true
    },
    image : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    qty:{
        type: Number,
        required : true
    },
})
const Product = mongoose.model('Products', productSchema);
export default Product;