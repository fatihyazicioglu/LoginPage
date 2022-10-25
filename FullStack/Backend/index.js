import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config"
import {Users} from "./Users.js"
let app = express()
app.use(express())
app.use(express.json())

app.use(cors({
    origin:"*"
}))

app.listen(process.env.PORT || 3500)

mongoose.connect(process.env.MONGO).then(()=>console.log("mongoose is connected"))

app.post("/postUser",async (req,res) => {
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    await Users.create({
        username,
        email,
        password
    }).then((result => res.json(result)))
})

app.get("/getUsers",async(req,res) => {
    await Users.find().then(result => res.json(result))
})

app.put("/update/:id",async (req,res) => {
    await Users.findByIdAndUpdate({"_id":req.params.id},req.body)
})

