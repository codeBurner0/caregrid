const express = require('express');
const router = express();
const bcrypt = require('bcryptjs');
require('../Database/connection/connectDb');
const User = require('../Database/models/user');
const cors = require('cors')
router.use(express.json());
router.use(cors())

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

module.exports = router;

