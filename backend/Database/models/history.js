const mongoose=require('mongoose');
const historySchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    radio:{
        type:String,
        required:true,
    },
    timeperiod:{
        type:Number,
        required:true,
    },
    formula:{
        type:String,
        required:true,
    },
    result:{
        type:String,
        required:true,
    }
})
module.exports=mongoose.model('history',historySchema)