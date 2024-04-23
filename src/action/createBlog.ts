'use server'

import { Blog } from "@/Types/Index"


export const createBlog=async(data:Blog)=>{

    const respone=await fetch("http://localhost:5000/blogs",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data),
        cache:"no-cache"
    });
    const blogInfo=await respone.json();
    return blogInfo;
}