import { toast } from "react-hot-toast";
import { NavBar } from "./_components/navbar";
import { ArticleCard } from "./_components/articleCard";
import { getBlogs } from "@/lib/blogs-display";
import TypeSideBar from "./_components/blogtypesidebar/typeSideBar";

interface BlogLayoutProps { 
    children: React.ReactNode;

}

const BlogLayout = async ({
    children
}: BlogLayoutProps) => {
    
    const blogs = await getBlogs();

    return (
        <>
            <div className="flex justify-between">
            <NavBar />
            </div>
            <div className="pt-12 flex flex-row gap-10">
                <TypeSideBar />
                <div className="  
                flex flex-col items-center justify-center
                ">
                {!!blogs && (
                    blogs.map((blog) => (
                        <ArticleCard
                            blogId={blog.id}
                            key={blog.id}
                            title={blog.title}
                            content={blog.content}
                            author={blog.author.name} />)
                    ))}
                {!blogs && (
                    <div className="text-center">
                        <h1>No blogs to display</h1>
                     </div>
                )}
                </div>
            </div>
        </>
    )
}
export default BlogLayout;