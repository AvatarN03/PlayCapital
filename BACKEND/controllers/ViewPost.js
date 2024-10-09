const Post = require("../models/Post");


const ViewPost = async(req, res)=>{

    const id = req.params.id;

    try {

        const post = await Post.findById(id);

        if(!post){
            return res.status(200).json({ isSuccess:false,  msg: "Post not found" });
        }

        return res.status(200).json({ isSuccess: true, post, msg:"Post Foundedd" });s
        
    } catch (error) {

        console.log("ViewPost Error:",  error);
        
        
    }

}


module.exports = ViewPost;