'use client';
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const BlogNavOption = () => {
    const router = useRouter();

    const handleBack = () => { 
        router.back();
    }
    return (
        <div className="">
            <Button>Post Blog</Button>
            <Button onClick={handleBack}>Go Back</Button>
        </div>
    )
}

