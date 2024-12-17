const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnect = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`DB Connected: ${connect.connection.host}, ${connect.connection.name}`)
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = dbConnect;