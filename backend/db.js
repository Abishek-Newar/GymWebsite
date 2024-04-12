import mongoose from "mongoose";
import { DATABASE_URL } from "./data";
mongoose.connect(DATABASE_URL)
.then(()=>{
    console.log("mongoose connected")
})

const contactSchema = new mongoose.Schema({
    name: String,
    email:String,
    phone: String,
})

const trialSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    date: Date,
    time: String,
})

const Contact = mongoose.model("Contact",contactSchema);
const BookTrial = mongoose.model("trial",trialSchema);

export {Contact, BookTrial}