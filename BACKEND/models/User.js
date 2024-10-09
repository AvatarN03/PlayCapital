const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,        
    },
    //to get the posts of the users
    post:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, { timestamps: true })


userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next(); // Only hash if password is modified
    
    
    
    try {
        const hashPassword = await bcrypt.hash(this.password, 8);
        console.log("pass");
        this.password = hashPassword;
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
});



module.exports = mongoose.model("User", userSchema);