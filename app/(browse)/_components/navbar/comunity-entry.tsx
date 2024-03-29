"use client";

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const CommunityEntry = () => {
    const router = useRouter();
    const blogbtnClick = () => {
        router.push('/blogs');
    
    }
    return (
        <div className="flex justify-between gap-x-4">

            <Button onClick={blogbtnClick}>Blogs</Button>

            <Button>OpenSpace</Button>
        </div>
        
    )
}
 
export default CommunityEntry