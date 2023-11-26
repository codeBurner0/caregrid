const mongoose=require('mongoose');
const conn = require('../connection/connectDb')
// const validator=require('validator')

var otpSchema=new mongoose.Schema({
    email:String,
    code: String,
    expireIn: Number,
},{
    timestamps: true
})
module.exports=mongoose.model('otp',otpSchema)
