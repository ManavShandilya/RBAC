const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers['authorization'];
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        if(!token) {
            res.status(401).json({message: "NO token, authorization denied"})
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            console.log("The decoded user is: ", req.user);
            next();
        }catch(err) {
            res.status(400).json({message: "Token is not valid"});
        }
    }
}


module.exports = verifyToken;