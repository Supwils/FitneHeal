import prisma from "@/lib/prismadb";

export async function GET(
    request: Request,
) {
    try {
        const blogs = await prisma.blog.findMany(
            {
                select: {
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