'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
import toast from "react-hot-toast";

interface BlogCreateBodyProps { 
    author: User | null;
}

const BlogCreateBody = ({
    author
}: BlogCreateBodyProps) => { 
    
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (event: { target: { value: SetStateAction<string>; }; }) => setTitle(event.target.value);
    const handleContentChange = (event: { target: { value: SetStateAction<string>; }; }) => setContent(event.target.value);

    const handleCreatePost = async (event:React.FormEvent) => { 
        event.preventDefault();
        
        const id = author?.id;
        try{
            const res = await fetch('/api/blogpost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    content,
                    authorId: id
                })
            });    

            const data = await res.json();

            toast.success('Blog post created');
            setTitle('');
            setContent('');
            //refresh page
            router.push('/blogs');
            window.location.reload();

        } catch {
            toast.error('Error creating blog post');
        }
        
    }

    return (
        <form onSubmit={handleCreatePost} className="flex flex-col items-center justify-center">
        <div className="w-2/5 pt-20">
                <Input type="text" placeholder="Blog Title"
                    onChange={handleTitleChange}
                    value={title}
                />
        </div>
        <div className="flex w-[80vh] h-[70vh] pt-5">
        <Textarea 
                value={content} 
                onChange={handleContentChange} 
                className="w-full"
                placeholder="Write your blog content here..."
                />
            </div>
            <Button type="submit">
                Create Post
            </Button>
    </form>
    )
}
export default BlogCreateBody;