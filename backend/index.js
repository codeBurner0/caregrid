const express = require("express");
const app = express();
const dotenv = require("dotenv");
const appRoutes = require("./Routes/userRoutes");
const fpRoute = require("./Routes/forgotPasswordRoute");
const helmet=require('helmet')
const responseTime=require('response-time')

dotenv.config();
const PORT = process.env.PORT || 7000;

app.use("/v1", appRoutes);
app.use("/v1", fpRoute);

app.use(helmet())
app.use(responseTime())

app.get("/", (req, res) => {
  res.send("Hello From the server");
});
const start = () => {
  app.listen(PORT, () => {
    console.log("server is started");
    console.log(`Click here: http://localhost:${PORT}/v1`);
  });
};
start();
