const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        toLowerCase:true
    },
    password:{
        type:String,
        required:true
    },
    contactNum:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    activeInd:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true
    },
    role:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model("User",UserSchema)