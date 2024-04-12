import express from "express";
import zod from "zod"
import cors from "cors"
import {Contact, BookTrial} from "./db.js"

const app = express();
app.use(express.json());
app.use(cors());
const contactValidator = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    phone: zod.number()
})
app.post("/contactus", async (req,res)=>{
    const body = req.body;
    const success = contactValidator.safeParse(body)
    if(!success){
        return res.status(403).status(403).json({msg: "invalid input"})
    }

    try {
        const response = await Contact.create({
            name: body.name,
            email: body.email,
            phone: body.phone
        })
        return res.json({
            msg: "added to the database succesfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(403).json({msg: "Error Occured while add to the database"})
    }
   
    
})
const trialValidator = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    phone: zod.number(),
    date: zod.date(),
    time: zod.string()
})
app.post("bookTrial",async(req,res)=>{
    const body = req.body;
    const success = trialValidator.safeParse(body)
    if(!success){
        return res.status(403).json({msg: "invalid inputs"})
    }
    const trialChecker = await BookTrial.findOne({
        $or:[{
            email: body.email
        },{
            phone: body.phone
        }]
    })
    if(trialChecker){
        return res.status(403).json({msg: "trial already done"})
    }
    try {
        const response = await BookTrial.create({})
    } catch (error) {
        console.log(error);
        return res.status(403).json({msg: "error while booking"})
    }
})

app.listen(3000,()=>{
    console.log("Port Connected")
})