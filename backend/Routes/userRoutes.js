const express = require('express');
const router = express();
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
require('../Database/connection/connectDb');
const User = require('../Database/models/user');
const cors = require('cors')
router.use(express.json());
router.use(cors())


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'codeburner0@gmail.com',
        pass: 'stdoftuycgumxcbj'
    }
});


router.get('/', (req, res) => {
    res.send("Hello World")
})

// search user route 
router.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    let result = await User.findOne({ _id: id }).select('-password');
    res.send(result);
})


// signup route 
router.post('/register', async (req, res) => {
    if (req.body.password === req.body.confirmPassword) {
        try {
            let result = new User(req.body);
            await result.save();
            result = result.toObject();
            delete result.password
            if (result) {
                const mailOPtions = {
                    from: 'support@caregrid.in',
                    to: req.body.email,
                    subject: 'Request for Reset Password',
                    html:'<div><h2>Thanks! for using CareGrid.</h2><h3>Registered Successfully!!</h3></div>',
                }
                const send_mail = await transporter.sendMail(mailOPtions)
                console.log(send_mail);
                res.status(201).send(result);
            } else {
                res.json({ message: "validation failed" })
            }
        } catch (err) {
            res.json({ message: err.message });
        }
    } else {
        res.status(400).json({ message: "password and confirmPassword are not same" });
    }
})


// signin route
router.post('/login', async (req, res) => {
    try {
        if (req.body.email && req.body.password) {
            const email = req.body.email;
            let result = await User.findOne({ email });
            console.log(result.password);
            const isMatch = await bcrypt.compare(req.body.password, result.password)
            if (isMatch) {
                result = result.toObject();
                delete result.password
                res.status(200).send(result);
            } else {
                res.status(401).json({ message: "check your credentials" });
            }
        } else {
            res.status(401).json({ message: "fields can't be empty" });
        }
    } catch (error) {
        res.status(404).json({ message: "check your credentials" });
    }
})


// update profile route
router.put('/update/:id', async (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const password = await bcrypt.hash(req.body.password, 10)
    const phone = req.body.phone
    try {
        let result = await User.updateOne({
            _id: req.params.id
        }, {
            $set: {
                firstName: firstName,
                lastName: lastName,
                password: password,
                phone: phone
            }
        })
        res.send(result)
    } catch (error) {
        res.json({ err: error.message })
    }
})

//reset-password route
router.put('/reset_password/:email', async (req, res) => {
    const newPassword = req.body.newPassword
    const confirmPassword = req.body.confirmPassword
    const password = await bcrypt.hash(newPassword, 10)
    if (newPassword === confirmPassword) {
        if (newPassword || confirmPassword) {
            try {
                let result = await User.updateOne({
                    email: req.params.email
                }, {
                    $set: {
                        password: password,
                    }
                })
                const mailOPtions = {
                    from: 'support@caregrid.in',
                    to: req.params.email,
                    subject: 'Request for Reset Password',
                    html:'<h3>Your Password Reset Successfully!</h3>',
                }
                const send_mail = await transporter.sendMail(mailOPtions)
                res.status(201).json({ "message": "password reset Successfully!" });


            } catch (error) {
                res.status(404).json({ err: error.message });
            }
        } else {
            res.status(404).json({ "message": "all fields are required!" });
        }
    } else {
        res.status(404).json({ "message": "passwords are not matching" });
    }
})

module.exports = router;

