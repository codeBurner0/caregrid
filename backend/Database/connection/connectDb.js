const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Vidisha:vidisha@cluster0.mgwgzxk.mongodb.net/hotel-rooms?retryWrites=true&w=majority&appName=Cluster0",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("connection is successful");
    }).catch((err) => {
        console.log("mongoose connection is not successful");
})