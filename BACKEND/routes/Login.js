const express = require('express');

//Initalizing the Express Router
const router = express.Router(); 
const {LoginController, SignController, TokenUser} = require("../controllers/LoginController.js");

//The upload the any images 
const upload = require('../controllers/FilesManager.js');
const verifyUser = require('../controllers/verifyUser.js');



router.post("/login", LoginController)
router.post("/signup", upload.single('avatar') , SignController)
router.get("/user", verifyUser , TokenUser)

module.exports = router;
