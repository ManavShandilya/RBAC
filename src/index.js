const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js")

dbConnect();

const app = express();

//Middlewares...
app.use(express.json());

//Routes...
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes)

//Start the server...
const PORT = process.env.PORT || 7001;

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});
