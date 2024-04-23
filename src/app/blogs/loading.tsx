import { Blog } from "@/Types/Index";
import LoadingCard from "@/components/ui/LoadingCard";

const LoadingPage = async() => {

    const respone=await fetch("http://localhost:5000/blogs");
    const blogs=await respone.json();

    return (
        <>
           <h1 className="text-4xl text-red-500 text-center">Loading ....</h1>
           <div className="grid grid-cols-3 gap-4">
            {
                blogs?.map((blog:Blog)=><LoadingCard key={blog.id}/>)
            }

           </div>
        </>
            
       
    );
};

export default LoadingPage;