import { Button, Fab } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import {  Delete, Edit } from '@mui/icons-material';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../context/userContext';


const ViewPost = () => {
    

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isEditable, setIsEditable] = useState(false);
    const data = useContext(userContext);
    
    useEffect(()=>{
        const fetchPost = async()=>{
            const response = await axios.get(`${import.meta.env.VITE_API_URI}create/post/${id}`)
            console.log(response);
            
            if(!(response.data.isSuccess)){
                console.log(response.data.msg);

            }
            else{
                setPost(response.data.post);
                if(response.data.post.userId == data.auth.user._id ){
                    setIsEditable(true);
                    console.log(response.data.post.userId);
                    
                }else{
                    setIsEditable(false);
                }
                
            }
            
        }
        fetchPost();
    },[])

  

    

    
       

   

    return (
        <main className='w-full mx-auto max-w-7xl min-h-screen'>
            <div className="w-[90%] bg-gray-400 h-fit max-h-[60vh]  my-3 mx-auto rounded overflow-hidden">
                <img
                    src={post?.coverImage}
                    alt="" className='w-full object-cover'
                />
            </div>
            <div className="flex justify-between items-center gap-2 w-full px-4">

                

                <div className="flex w-full justify-end items-center gap-2">
                    <button disabled className='text-black/80 bg-rose-300 p-2 rounded flex items-center gap-2'>Creator: <p className='p-1 bg-rose-400 rounded'>{post.username}</p></button>
                    <Button name="topic" style={{backgroundColor:"pink", color:"black"}} id="topic" className='bg-slate-200 p-3 '>{post.category}</Button>
                    { isEditable? (     
                        <>
                    <Link to={`/editpost/${id}`}>   
                    <Fab color="secondary" aria-label="edit">
                        <Edit />
                    </Fab>
                    </Link>
                        </>)           
                    : null }
                </div>
            </div>
            <div className="h-full w-full px-4 my-16 mb-60">
                <div >
                   
                <label htmlFor="title" className="text-base sm:text-xl md:text-2xl lg:text-4xl block text-white">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        readOnly="true"
                       value={post.title}
                        className="text-3xl capitalize p-4 border-slate-300 outline-none my-7 border-b-2 w-full flex flex-wrap"
                    />
                    <label htmlFor="desc" className="text-base sm:text-xl md:text-2xl block text-white ">Description</label>
                    <textarea
                        name="desc"
                        readOnly="true"
                        value={post.desc}
                        id="desc"
                        className="w-full min-h-5 bg-rose-50 rounded-md resize-none text-xl mb-16 p-3 border-slate-200 outline-none"
                    />
                    
                    <div className="flex justify-end items-center">
                    <Link to={"/blog"} className='py-1 px-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-s-sm'>Return</Link>

                       
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ViewPost;
