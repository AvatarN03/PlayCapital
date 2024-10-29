const Post = require("../models/Post")


const getPosts = async (req,res)=>{
    const { category } = req.query; 
    console.log(category);
    
    let posts;
    
    if (category && category !== 'All') {

        
        posts = await Post.find({ category });
    } else {
        

        posts = await Post.find({});
    }

    
    if(posts){

        return res.status(200).json({isSuccess:true, posts, msg:"Post gotit"})
    }
    return res.status(400).json({isSuccess:false,  error:"Something went wrong, Please try again"})
}

module.exports = getPosts;