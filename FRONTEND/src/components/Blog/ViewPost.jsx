import { Button, Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {  Delete, Edit } from '@mui/icons-material';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const ViewPost = () => {
    

    const {id} = useParams();
    const [post, setPost] = useState({});
    
    useEffect(()=>{
        const fetchPost = async()=>{
            console.log(id);
            const response = await axios.get(`${import.meta.env.VITE_API_URI}/create/post/${id}`)
            console.log(response);
            
            if(!(response.data.isSuccess)){
                console.log(response.data.msg);

            }
            else{
                setPost(response.data.post);
                console.log(post);
                
            }
            
        }
        fetchPost();
    })
  

    

    
       

   

    return (
        <main className='w-full mx-auto max-w-7xl min-h-screen'>
            <div className="w-[90%] bg-gray-400 h-96 my-3 mx-auto rounded overflow-hidden">
                <img
                    src={post?.coverImage}
                    alt="" className='w-full object-cover'
                />
            </div>
            <div className="flex justify-between items-center gap-2 w-full px-4">

                

                <div className="flex w-full justify-end items-center gap-2">
                    <Button name="topic" style={{backgroundColor:"pink", color:"black"}} id="topic" className='bg-slate-200 p-3 text-black'>{post.category}</Button>
                        
                    <Fab color="secondary" aria-label="edit">
                        <Edit />
                    </Fab>
                    <Fab color="warning" aria-label="delete">
                        <Delete />
                    </Fab>
                </div>
            </div>
            <div className="h-full w-full px-4 my-16">
                <div >
                   
                    <h2 className='text-3xl capitalize p-4 border-slate-300 outline-none my-7 border-b-2 w-full flex flex-wrap'>{post.title}</h2>
                    <p className='w-full min-h-5 bg-rose-50 rounded-md resize-none text-xl mb-16 p-3 border-slate-200 outline-none'>{post.desc}</p>
                    
                    <div className="flex justify-end items-center">
                       
                        <Button variant="outlined"><Link to={"/blog"}>Return</Link></Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ViewPost;
