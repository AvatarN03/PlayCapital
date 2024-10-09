import { Link } from "react-router-dom";
import { Add } from '@mui/icons-material';
import { useEffect, useState } from "react";
import axios from 'axios';  // Don't forget to import axios

const options = [
  { id: 1, topic: "stockMarket" },
  { id: 2, topic: "CryptoCurrency" },
  { id: 3, topic: "Option Trading" },
  { id: 4, topic: "DropShipping" }
];

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        let url = `${import.meta.env.VITE_API_URI}/create/post`;
        console.log("hi1");
        
        if (category !== 'All') {
          console.log("hi2");
          url += `?category=${category}`;
        }
        console.log("hi3");
        const response = await axios.get(url);

        console.log(response);
        console.log("hi4");
        if (response.data.isSuccess) {  // Check for successful response
          console.log("hi5");
          setPosts(response.data.posts); // Ensure posts is being set correctly
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [category]);

  const changePost = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
 
  };


  return (
    <div className="bg-rose-500 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto w-full rounded-xl lg:mx-0 bg-rose-200/80 p-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Capital Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn and Get the Trends of the Money in World
          </p>
        </div>
        <div className="mx-auto mt-10 flex flex-col gap-12">
          <div className="w-full min-h-4 flex justify-between items-center">
            <select name="topic" id="topic" className="p-3 rounded-md bg-rose-100/50 cursor-pointer" onChange={changePost}>
              <option value="All" defaultValue>All</option>
              {options.map((option) => (
                <option value={option.topic} key={option.id}>{option.topic}</option>
              ))}
            </select>
            <button className="bg-secondary py-2 px-1  rounded flex justify-center gap-1 items-center">
              <Add />
              <Link to={"/createpost"}>Create a Blog</Link>
            </button>
          </div>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link to={`/post/${post._id}`} key={post._id} className="flex h-[300px] sm:h-72 flex-col-reverse sm:flex-row items-start justify-between bg-fourth/90 py-4 px-8 rounded-md relative cursor-pointer">
                <div className="w-full sm:w-[30%] my-4">

                  <div className="flex justify-between items-center">
                    <h1 className="text-3xl text-primary">{post.title}</h1>
                    <button className="bg-rose-300 p-3 min-w-[100px] sm:absolute bottom-0 left-0">{post.category}</button>
                  </div>
                  <p className="text-xl tracking-wider text-rose-100 my-4">{post.desc}</p>
                </div>
                <div className="w-full sm:w-[70%] rounded-lg overflow-hidden h-full">
                  <img src={post.coverImage} alt="" className="w-full h-full object-cover" />
                </div>
              </Link>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
