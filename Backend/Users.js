import mongoose from "mongoose";
let {Schema,model} = mongoose;

let user = new Schema({
    username : String,
    email:String,
    password:String
})

export let Users = model("users",user)