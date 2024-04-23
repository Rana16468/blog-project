import { Blog } from "@/Types/Index";
import BlogDetails from "@/components/ui/BlogDetails";

interface blogId{
    params:{
        blogId:string
    }
}

// instance static server site randering , without requested server in runtime 
export const generateStaticParams=async()=>{
    const res= await fetch('http://localhost:5000/blogs');
    const blogs=await res.json();
    return blogs.slice(0,3).map((blog:Blog)=>({blogId:blog.id}))
}
const BlogDetailPage = async({params}:blogId) => {

  const res=await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
    cache:"no-store"
  });
  const blog=await res.json();
 

    return (
        <div className="my-10">
             < BlogDetails blog={blog}/>
        </div>
    );
};

export default BlogDetailPage;