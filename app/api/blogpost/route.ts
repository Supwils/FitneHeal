import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request,
) {
    //const user = await getCurrentUser();

    const body = await request.json();
    const {
        title,
        content,
        authorId
    } = body;

    try {
        
        const blogPost = await prisma.blog.create({
            data: {
                authorId,
                title,
                content,
            }
        })
        return NextResponse.json(blogPost);
    } catch(error) {
        throw new Error('Error creating blog post');
    }
    
}