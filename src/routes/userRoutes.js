const express = require("express");
const verifyToken = require("../middlewares/authMiddleware.js")
const authorizeRoles = require("../middlewares/roleMiddleware.js");
const router = express.Router();

//Only admin can access...
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({message: "Welcome Admin"});
})

//Both admin and manager can access...
router.get("/manager", verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
    res.json({message: "Welcome Manager"});
})

//All can access
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
    res.json({message: "Welcome User"});
})

module.exports = router;