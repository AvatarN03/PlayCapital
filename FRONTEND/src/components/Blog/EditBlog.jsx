import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Fab } from '@mui/material';
import { AddCircle, Delete } from '@mui/icons-material';
import { options } from '../../utls/features';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate for redirects
  const [post, setPost] = useState({});
  const [errors, setErrors] = useState({}); // State for error handling
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [cover, setCover] = useState(post.coverImage);
  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URI}create/post/${id}`);
        setPost(response.data.post);
        setSelectedTopic(response.data.post.category);
        console.log(response.data.post);

      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();
  }, [id]); 

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
    console.log(post);
    

  };

  const handleFile = (e) => {
    console.log("File selected");
    setCover(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const formData = new FormData();
    formData.append('title', post.title);

    formData.append('desc', post.desc);
    formData.append('category', selectedTopic);

      formData.append('coverImage', cover || post.coverImage);
  console.log(JSON.stringify(formData));

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URI}create/post/${id}`, formData,{
        headers: {
          'Content-Type':'multipart/form-data'  
        },
      });
      if (response.data.isSuccess) {
        navigate('/blog'); // Redirect to blog page on successful edit
      } else {
        setErrors(response.data.errors); // Set errors from API response
      }
    } catch (error) {
      console.error(error); // Handle errors gracefully
    }
  };

  const deletePost = async () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this post?');
    
    if (isConfirmed) {
      try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URI}create/post/${id}`);
  
        if (response.data.message === 'Post deleted successfully') {
          console.log('Post deleted successfully');
          navigate('/blog'); // Redirect to blog page on successful deletion
        } else {
          console.error('Error deleting post:', response.data.message);
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    } else {
      console.log('Post deletion canceled');
    }
  };
  

  return (
    <main className='w-full mx-auto max-w-7xl min-h-screen'>
      <div className="w-[90%] bg-gray-400 h-96 my-3 mx-auto rounded overflow-hidden">
        <img
          src={post?.coverImage}
          alt="" className='w-full object-cover'
        />
      </div>
      <div className="flex justify-between items-center gap-2 w-full px-4">

        <label htmlFor="file" >
          <input
            type="file"
            id="file"
            name="coverImage"
            className="hidden"
            onChange={handleFile}

          />
          <AddCircle style={{ fontSize: "40px", color: "#eee" }} />
        </label>

        <div className="flex justify-end items-center gap-2">
          <select name="topic" id="topic" className='bg-slate-200 p-3' value={selectedTopic}
            onChange={handleTopicChange} >
            <option value="All" defaultValue>All</option>
            {options.map((option) => (
              <option value={option.topic} key={option.id}>{option.topic}</option>
            ))}
          </select>
          {/* <Fab color="secondary" aria-label="edit">
                        <Edit />
                    </Fab>*/}

          <Fab color="warning" aria-label="delete" onClick={() => deletePost()}>
            <Delete />
          </Fab>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col  justify-between min-h-80 mx-4 my-3'>

        <label htmlFor="title" className='flex flex-col text-slate-200'>
          <p>Title:</p>
          <input type='text'

            name="title"
            value={post.title}
            onChange={handleChange}
            className='text-slate-600 p-3 rounded-md text-base sm:text-xl md:text-2xl lg:text-3xl'
          />
        </label>


        <label htmlFor="desc" className='flex flex-col text-slate-200'>
          <p>Description:</p>
          <input type='text'

            name="desc"
            value={post.desc}
            onChange={handleChange}
            className='text-slate-600 p-3 rounded-md text-base sm:text-xl md:text-2xl lg:text-3xl'
          />
        </label>
        <Button type="submit" variant="contained">
          Update Post
        </Button>
      </form>
    </main>
  );
};

export default EditPost;