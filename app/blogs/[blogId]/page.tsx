import { getOneBlog } from "@/lib/one-blog";
import BlogDisplay from "./_components/blogDisplay";
import CommentDisplay from "./_components/comments";
import { NavBar } from "./_components/navbar";

interface BlogPageProps {
    params: {
        blogId: string;
    }
}


const blogPage = ({ params: { blogId } }: BlogPageProps) => {
    const blog = getOneBlog(blogId);

    return (
        <>
        <NavBar />
        <div className="pt-20 flex flex-col justify-center items-center">
            <BlogDisplay blogId={blogId} />
            <CommentDisplay />
        </div>
        </>
    )
}

export default blogPage;