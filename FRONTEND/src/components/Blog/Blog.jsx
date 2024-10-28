import { Link } from "react-router-dom";
import { Add, AddOutlined } from '@mui/icons-material';
import { useEffect, useState } from "react";
import axios from 'axios';  // Don't forget to import axios
import { options } from '../../utls/features';


const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        let url = `${import.meta.env.VITE_API_URI}create/post`;

        if (category !== 'All') {
          url += `?category=${category}`;
        }
        const response = await axios.get(url);

        console.log(response);
        if (response.data.isSuccess) {  // Check for successful response
          console.log(response.data.posts);
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
    <div className="bg-white bg-opacity-20  md py-4 sm:py-32 min-h-screen relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto w-full rounded-xl lg:mx-0 bg-rose-200/80 p-5">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Capital Blog</h2>
          <p className="mt-2 text-base sm:text-lg leading-8 text-gray-600">
            Learn and Get the Trends of the Money in World
          </p>
        </div>
        <div className="mx-auto mt-10 flex flex-col gap-12">
          <div className="w-full min-h-4 flex justify-between gap-4 items-center">
            <select name="topic" id="topic" className="p-3 rounded-md w-[100px] sm:w-auto bg-rose-100/50 cursor-pointer outline-none" onChange={changePost}>
              <option value="All" defaultValue>All</option>
              {options.map((option) => (
                <option value={option.topic} key={option.id}>{option.topic}</option>
              ))}
            </select>
            <Link to={"/createpost"} className="bg-[#5827B7] p-2  text-white text-sm sm:text-base md:text-lg lg:text-xl rounded flex justify-center gap-1 items-center hover:opacity-85">
              <AddOutlined />
              <h4  >Create a Blog</h4>
            </Link>
          </div>
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                to={`/post/${post._id}`}
                key={post._id}
                className="flex h-fit flex-col  items-start justify-between bg-[#9d41ef] py-4 px-2 sm:px-8 rounded-md relative cursor-pointer"
              >
                <div className="w-full text-center mb-3 pb-2 border-b-2">
                  <h1 className="text-xl sm:text-2xl font-normal sm:font-semibold  text-primary break-all whitespace-normal">{post.title}</h1>
                </div>
                <div className="flex w-full items-center gap-4 sm:flex-row">
                  <div className="w-full sm:w-[69%] my-4">
                    <div className="flex flex-col justify-between  items-start">
                      <p className="text-sm mt-0  font-light sm:text-xl tracking-wider text-rose-100 my-4 break-all whitespace-normal">{window.innerWidth < 640 // 640px is the breakpoint for "sm" in Tailwind
                        ? post.desc.length > 26
                          ? `${post.desc.slice(0, 26)}...`
                          : post.desc
                        : post.desc}</p>
                      <button className="bg-rose-300 p-3 min-w-[100px] absolute sm:static bottom-0 left-0">
                        {post.category}
                      </button>
                    </div>
                  </div>
                  <div className="w-full sm:w-[30%] rounded-lg overflow-hidden h-full">
                    <img src={post.coverImage} alt="" className="w-full h-full object-cover" />
                  </div>
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
