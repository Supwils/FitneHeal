"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const CommunityEntry = () => {
    const router = useRouter();

    const blogbtnClick = () => {
        router.push('/');
    }

    const createBlogClick = () => {
        router.push('/blogs/create');
    }
    return (
        <div className="flex justify-between gap-x-4">
            <Button onClick={createBlogClick}>Write a Post</Button>
            <Button onClick={blogbtnClick}>BackToMain</Button>

            <Button>OpenSpace</Button>
        </div>
        
    )
}
 
export default CommunityEntry