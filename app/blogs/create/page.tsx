import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { SetStateAction, useState } from "react";
import { NavBar } from "../_components/navbar";
import BlogCreateNav from "./_components/blogcreatenav";
import getCurrentUser from "@/app/actions/getCurrentUser";
import BlogCreateBody from "./_components/blogCreateBody";


const createPostPage = async () => {
    const user = await getCurrentUser();
    

    return (
        <div className="justify-between">
            <BlogCreateNav />
            <BlogCreateBody author={user}/>
       
        </div>
    )
}

export default createPostPage
