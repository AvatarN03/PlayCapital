import { Button, Fab } from '@mui/material';
import React, { useState, useRef, useContext } from 'react';
import { AddCircle, Delete, Edit } from '@mui/icons-material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { options } from '../../utls/features';
import { userContext } from '../../context/userContext';




const CreateBlog = () => {
    const [cover, setCover] = useState("https://imgs.search.brave.com/zj90E50IZp3mj8hkD-9psGbC7iNGqwcxwZuQZNHQ0To/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cnlyb2IuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAy/L0hvdy10by1QaWNr/LXRoZS1SaWdodC1J/bWFnZXMtdG8tVXNl/LW9uLVlvdXItQmxv/Zy1TdG9jay1JbWFn/ZS1FeGFtcGxlLnBu/Zw");
    const navigate = useNavigate();
    const [selectedTopic, setSelectedTopic] = useState('All');
    const data = useContext(userContext);
    

    const handleTopicChange = (e) => {
        setSelectedTopic(e.target.value);
    };

    const handleFile = (e) => {
        console.log("File selected");
        setCover(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    const handlePost = async (e) => {
        e.preventDefault();
        let postData = new FormData();
        postData.append('title', e.target.title.value);
        postData.append('desc', e.target.desc.value);
        postData.append('category', selectedTopic);
        postData.append("userId", data.auth.user._id)

        if (cover) {
            postData.append('coverImage', cover);
        }
        console.log(JSON.stringify(postData));
        

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URI}/create/createPost`, postData,{
                headers: {
                    'Content-Type':'multipart/form-data'  
                  },
            });
            navigate("/blog");

            if(response.isSuucess){
                alert(response.data.msg)
            }else{
                alert(response.data.msg)
            }
        } catch (error) {
            console.error('Error creating blog post:', error);
        }
    };

  

    return (
        <main className='min-h-screen w-full mx-auto max-w-7xl'>
            <div className="w-[90%] bg-gray-400 h-64 my-3 mx-auto rounded overflow-hidden">
                <img
                    src="https://imgs.search.brave.com/UK4thbPVlOQ89ngqgOfEovZUixpCGqcl1WGb4OZYo90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMmtm/OHB0bHhjaW5hOC5j/bG91ZGZyb250Lm5l/dC9OOEpVS0RFSE9W/LXByZXZpZXcucG5n"
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
                    <AddCircle style={{ fontSize: "40px", color:"#eee" }} />
                </label>

                <div className="flex justify-end items-center gap-2">
                    <select name="topic" id="topic" className='bg-slate-200 p-3 cursor-pointer' value={selectedTopic}
                        onChange={handleTopicChange} >
                        <option value="All" defaultValue>All</option>
                        {options.map((option) => (
                            <option value={option.topic} key={option.id}>{option.topic}</option>
                        ))}
                    </select>
                    {/* <Fab color="secondary" aria-label="edit">
                        <Edit />
                    </Fab>
                    <Fab color="warning" aria-label="delete">
                        <Delete />
                    </Fab> */}
                </div>
            </div>
            <div className="h-full w-full px-4 my-16">
                <form onSubmit={handlePost}>
                    <label htmlFor="title" className="text-base sm:text-xl md:text-2xl lg:text-4xl block text-white">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter your title"
                        className="text-3xl capitalize p-4 border-slate-300 outline-none my-7 border-b-2 w-full flex flex-wrap"
                    />
                    <label htmlFor="desc" className="text-base sm:text-xl md:text-2xl block text-white ">Description</label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows={5}
                        className="w-full min-h-5 bg-rose-50 rounded-md resize-none text-xl mb-16 p-3 border-slate-200 outline-none"
                    />
                    <div className="flex justify-between items-center">
                        <Button type="submit" variant="contained">Create</Button>
                        <Link to={"/blog"} className='py-1 px-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-s-sm'>Return</Link>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CreateBlog;
