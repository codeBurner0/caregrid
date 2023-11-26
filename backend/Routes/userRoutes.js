const express=require('express');
const nodemailer = require ('nodemailer');
const router=express();
const bcrypt=require('bcryptjs');
require('../Database/connection/connectDb');
const User=require('../Database/models/user');
const Otp=require('../Database/models/otp');
const History=require('../Database/models/history');
const cors=require('cors')
router.use(express.json());
router.use(cors())


router.get('/',(req,res)=>{
    res.send("Hello World")
})
router.get('/user/:id',async(req,res)=>{
    const id=req.params.id;
   let result=await User.findOne({_id:id}).select('-password');
   res.send(result);
})

router.get('/userHistory/:id',async(req,res)=>{
    const id=req.params.id;
   let result=await History.find({userId:id});
   res.send(result);
})

router.post('/register',async(req,res)=>{
    if(req.body.password === req.body.confirmPassword){
        try{
            let result=new User(req.body);
            await result.save();
            result=result.toObject();
            delete result.password
            if(result){
                res.status(201).send(result);
            }else{
                res.json({message:"validation failed"})
            }
        }catch(err){
            res.json({message:err.message});
        }
    }else{
        res.status(400).json({message:"password and confirmPassword are not same"});
    }
})

router.post('/login',async(req,res)=>{
    try {
        if(req.body.email && req.body.password){
        const email=req.body.email;
        let result =await User.findOne({email});
        console.log(result.password);
        const isMatch=await bcrypt.compare(req.body.password,result.password)
        if(isMatch){
            result=result.toObject();
            delete result.password
            res.status(200).send(result);
        }else{
            res.status(401).json({message:"check your credentials"});
        }
        }else{
            res.status(401).json({message:"fields can't be empty"});
        }
    } catch (error) {
        res.status(404).json({message:"check your credentials"});
    }
})

router.post('/history',async(req,res)=>{
        if(req.body.userId && req.body.radio && req.body.formula && req.body.timeperiod){
            try{
                let resul=new History(req.body);
                await resul.save();
                if(resul){
                    res.status(201).send(resul);
                }else{
                    res.json({message:"all fields are mandatory"})
                }
            }catch(err){
                res.json({message:err.message});
            }
        }else{
            res.status(400).json({message:"all fields are mandatory"});
        }
})



router.put('/update/:id',async(req,res)=>{
    const firstName=req.body.firstName
    const lastName=req.body.lastName
    const password=await bcrypt.hash(req.body.password,10)
    const phone=req.body.phone
        try {
            let result=await User.updateOne({
                _id:req.params.id},{$set:{
                    firstName:firstName,
                    lastName:lastName,
                    password:password,
                    phone:phone
                }})
                res.send(result)
        } catch (error) {
            res.json({err:error.message})
        }
})
router.post('/emailSend',async(req,res)=>{
    let data = await User.findOne({email: req.body.email})
    // console.log(req.body.email)
    const response = {}
    if(data){
        let otpcode = Math.floor((Math.random()*10000)+1);
        let otpData = new Otp({
            email: req.body.email,
            code: otpcode,
            expireIn: new Date().getTime() + 300*1000 
        })
        let otpResponse = await otpData.save();
        sendEmail();
        res.status(200).json({message:"Success!! Please Check Your Email"});
       
        // mailer(manvisinghal1108@gmail.com, 1234)
    }
    else{
        res.status(404).json({message:"Error check your credentials"});
    }
    
})

router.post('/changePassword',async(req,res)=>{
    let data = await Otp.find({email:req.body.email, code:req.body.otpCode})
    const response = {}
    if(data){
        let currentTime = new Date.getTime();
        let diff = data.expireIn - currentTime;
        if(diff < 0){
            response.message = 'Token Exired'
            response.statusText = 'Error'
        }else{
            let user = await User.findOne({ email: req.body.email})
            User.password = req.body.password;
            User.save();
            response.message = 'Passwords Updated'
            response.statusText = 'Success'
        }
    }else{
        response.message = 'Invalid OTP'
        response.statusText = 'Error'
    }
    res.status(200).json(response)
})

// const mailer = (email,otp)=>{
async function sendEmail(){
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        // service: 'gmail',
        // port: 587,
        // secure: false,
        // auth:{
        //     user:'manvisinghal1108@gmail.com',
        //     pass:'Madhurima@19'
        // }
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'tyrel.boyle21@ethereal.email',
            pass: 'VZ7FNJ5hx9kWDYVXkG'
        }
    });
    // var mailOPtions = {
    //     from: 'manvisinghal1108@gmail.com',
    //     to: 'manvisinghal285@gmail.com', 
    //     subject: 'Sending Email using Node.js',
    //     text: 'Thankyou for choosing us'
    // };
    // transporter.sendMail(mailOPtions, function(error, info){
    //     if(error){
    //         console.log(error);
    //     }else{
    //         console.log('Email sent: ' + info.response);
    //     }
    // })
    let info = await transporter.sendMail({
        from: '"Manvi Singhal 👻" <foo@gmail.com>', // sender address
        to: "manvisinghal285@gmail.com", // list of receivers
        subject: "Hello ✔",
        text: "Hello", 
        html: "<b>Hello world</b>", // html body
    });
    console.log('message sent', info.messageId);
    // res.json(info)
}

module.exports=router;

