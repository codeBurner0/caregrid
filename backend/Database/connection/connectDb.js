const mongoose = require("mongoose");
const dotenv=require('dotenv')
dotenv.config()
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => {
    console.log("mongoose connection is not successful");
  });
