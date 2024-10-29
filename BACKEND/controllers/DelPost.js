const Post = require("../models/Post");

const DelPost = async (req, res)=>{
    const { id } = req.params;

  try {
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json({
 message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = DelPost;