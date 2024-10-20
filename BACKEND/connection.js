//The Mongoose for connecting the Database and indirecting implementing the schema in MONGODB.

const mongoose = require("mongoose");

//Enable the Environment variable to file
require('dotenv').config();

const DBConnect = async() => {
  try {
    await mongoose.connect(
      `mongodb+srv://avengersyobaby051:${process.env.DB_PASSWORD}@cluster0.u5sk5.mongodb.net/playcapital`);
      console.log("The PlayCapital Backend is Connected to Database Successfully");
      
  } catch (error) {
    console.log("The PlayCapital Backend is Not Connected to Database.", error);
    process.exit(1);
    
  }
};

module.exports = DBConnect;
