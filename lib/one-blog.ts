import db from "@/lib/prismadb";

export const getOneBlog = async (id: string) => { 
    try {
        const blog = await db.blog.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                author: true,
                title: true,
                content: true,
                tags: true,
                datePosted: true,
                comments: true,
            }
        })
        return blog;
    } catch (error) {
        throw new Error("Error fetching blog");
        }
}