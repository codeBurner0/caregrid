const express=require('express');
const app=express()
const appRoutes=require('./Routes/userRoutes')
const fpRoute=require('./Routes/forgotPasswordRoute')
const port=process.env.PORT || 5000;

app.use('/v1',appRoutes);
app.use('/v1',fpRoute);
const start=()=>{
    app.listen(port,()=>{
        console.log("server is started");
        console.log("Click here: http://localhost:5000/v1");
    })
}
start();