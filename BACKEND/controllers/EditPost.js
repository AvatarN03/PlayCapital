const Post = require("../models/Post.js");
const uploadImage = require("../utils/uploadCloudinary");

const EditPost = async (req, res) => {
  const { id } = req.params;
  let coverURL = "";

  
  console.log(req.body);
  console.log(req.body.cover);

  

  try {
    // Upload the cover image (if provided)
    if (req.file) {
      coverURL = await uploadImage(req.file.path);
    }

    // Update the post with the new data, including the cover image URL
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        desc: req.body.desc,
        category: req.body.category,
        coverImage: coverURL || req.body.coverImage,
      },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({ isSuccess: true, message: 'Post updated successfully', post: updatedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = EditPost;