"use client"

import { Blog } from "@/Types/Index";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";


const BlogsPage = () => {

    
  const {data}=useGetBlogsQuery("");
 
    return (
        <div className="w-[90%] mx-auto">
             <h1 className="text-4xl text-center">All Blogs From <span className="text-accent">Blogs</span></h1>
             <p className="text-xl text-center text-gray-400 w-2/4 mx-auto m-3"><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>
              <div className="grid grid-cols-3 gap-4 my-5">
              {
                   data?.map((blog:Blog)=><BlogCard key={blog.id} blog={blog}/>)
                } 

             </div>
        </div>
    );
};

export default  BlogsPage ;