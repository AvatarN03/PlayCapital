const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        
        type: String,
        required: true,
        unique: false
    },
    coverImage: {
        type: String,
        default:"https://cloud.mongodb.com/v2#/org/66c0863aaea46b2947b8cfa1/"
    },
    user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    
}, { timestamps: true });

// Pre-save hook
postSchema.pre("save", function (next) {
    console.log("Post data being saved:");
    console.log("Title:", this.title);
    console.log("Description:", this.desc);
    console.log("Category:", this.category);
    console.log("Cover Image:", this.coverImage);
    
    next();
});

module.exports = mongoose.model("Post", postSchema);
