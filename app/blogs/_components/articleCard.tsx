import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ArticleCardProps{
    blogId: string;
    title: string;
    content: string;
    author: string | null;
}
export const ArticleCard = ({
    blogId,
    title,
    content,
    author
}: ArticleCardProps) => { 
    
    if (content.length > 50) {
        content = content.slice(0, 50) + '...';
     }

    
    
    return (
        <div className="shadow-lg w-96 h-70 gap-y-4 hover:bg-gray-200 ">
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{content}</p>
            <Button
                size={'sm'}
                variant="link"
            >
                <Link href={`/blogs/${blogId}`}>
                    Read More
                </Link>
            </Button>
            
        </div>
    )
}