const Post = require("../models/Post");
const uploadImage = require("../utils/uploadCloudinary");

const createPost = async (req, res) => {
  try {
    let coverURL = "";

    coverURL = await uploadImage(req.file?.path);

    const post = await Post.create({
      title: req.body.title,
      desc: req.body.desc,
      category: req.body.category,
      coverImage: coverURL,
      user: req.body.userId
    });

    console.log("hii");

    if (post) {
      return res
        .status(200)
        .json({ isSuccess: true, msg: "post created successfully" });
    }
    return res
      .status(200)
      .json({ isSuccess: false, msg: "Post creation failed" });
  } catch (error) {
    console.log("Post not Created ", error);
  }
};

module.exports = createPost;
