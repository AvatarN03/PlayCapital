const express = require('express');
const router = express.Router(); 
const createPost = require("../controllers/CreatePost")
const getPost = require("../controllers/GetPost")
//Uploading the image in Backend folder from the frontend
const upload = require('../controllers/FilesManager.js');
const ViewPost = require('../controllers/ViewPost.js');
const EditPost = require('../controllers/EditPost.js');
const DelPost = require('../controllers/DelPost.js');

router.post("/createPost", upload.single('coverImage'), createPost)
//Geting the post in face page
router.get("/post", getPost)

//Getting the post of the specified post
router.get("/post/:id", ViewPost)
router.post("/post/:id",upload.single('coverImage'), EditPost)
router.delete("/post/:id", DelPost)

module.exports = router;
