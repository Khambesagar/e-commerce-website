import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name : {
        type: String,
    },
    price : {
        type: Number,
    },
    category : {
        type: String
    },
    image : {
        type: String
    },
    title : {
        type: String
    }
})
const Book = mongoose.model('Books', bookSchema);
export default Book;