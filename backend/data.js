import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Abishek_Newar:Abishek2002@cluster0.kkrveku.mongodb.net/GymWebsite")
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