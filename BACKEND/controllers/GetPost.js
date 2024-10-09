const Post = require("../models/Post")


const getPosts = async (req,res)=>{
    const { category } = req.query; 
    console.log(category);
    
    let posts;
    
    if (category && category !== 'All') {
        console.log("hi1");
        
        posts = await Post.find({ category });
    } else {
        
        console.log("hi2");
        posts = await Post.find({});
    }
    console.log("hi3");
    
    if(posts){
        console.log("hi4");
        return res.status(200).json({isSuccess:true, posts, msg:"Post gotit"})
    }
    return res.status(400).json({isSuccess:false,  error:"Something went wrong, Please try again"})
}

module.exports = getPosts;