//The Express is used to handle the routing functions and provide easy access to nodejs functionality.

const express = require("express");
// Cors is Used to handle the Request-Reponse Interface
const cors = require('cors');

//this is the user defined routing functionality
const Login = require("./routes/Login.js")
const Post = require("./routes/Post.js")

//The connects the Database 
const DBConnect = require("./connection.js");

//This initiate the express 
const app = express();


// The Port where the backend i.e. Server is running
const port = process.env.PORT || 3000;

const allowedOrigins = [process.env.FRONTEND_URL];

const options = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
};

app.use(cors(options));


//The enable the file transfer 
app.use(express.urlencoded({extended:true}));
// Enable the form format 
app.use(express.json());

DBConnect();

//Home Page 
app.get("/", (req, res)=>{
    return res.send("Hii form Backend , Welcome to PLayCapital Backend -> User")
})

//Login Page
app.use("/api", Login)

//Post Page
app.use("/create", Post)


// http creation
app.listen(port, () => `Server listening on ${port}`);
