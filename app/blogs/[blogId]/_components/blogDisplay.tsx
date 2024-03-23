import { getOneBlog } from "@/lib/one-blog";
import { format } from 'date-fns';

interface BlogDisplayProps { 
    blogId:string
}

const BlogDisplay = async ({blogId}:BlogDisplayProps) => {
    const blog = await getOneBlog(blogId);

    
    if (!blog) {
        return <div>Blog not found</div>
    }

    const formated_blog = blog?.content.split('\n');
    const postDate = new Date(blog.datePosted);
    const formattedDate = format(postDate, "MMMM dd, yyyy, p");

    return (
        <div className="bg-slate-200 flex flex-col justify-center w-1/2 h-auto 
                        p-5 shadow-md rounded">
            <h1 className="font-sans text-2xl font-semibold">{blog.title}</h1>
            <br/>
            <div className="flex flex-row justify-between">
                <div className="text-xl">
                Creator: {blog.author.name}
                </div>
                <p>{formattedDate}</p>
            </div>
            <br/>
            {formated_blog?.map((paragraph, index) => (
                <p className="font-momo" key={index}>{paragraph} <br/></p>
                
                )
            )}
            Write a comment
        </div>
    )
}

export default BlogDisplay;