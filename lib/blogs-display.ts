import prisma from "@/lib/prismadb";

export const getBlogs = async () => {
    try {
        const blogs = await prisma.blog.findMany(
            {
                select: {
                    id: true,
                    title: true,
                    content: true,
                    author: {
                        select: {
                            name: true
                        }
                    }
                },
                orderBy: {
                    datePosted: 'desc'
                }
            }
        );

        return blogs;
    }
    catch (error) {
        throw new Error('Error fetching blogs');
    }
}