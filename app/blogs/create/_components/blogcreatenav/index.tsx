import { Logo } from "@/app/(browse)/_components/navbar/logo"
import { BlogNavOption } from "./blogNavEntry"

const BlogCreateNav = () => {
    return (
            <nav>
                <div className="fixed top-0 h-auto bg-amber-400
                                items-center flex w-full z-[50] px-1
                                justify-between shadow-lg">
                    <Logo />
                    <BlogNavOption />
                </div>
            </nav>    
    )
}

export default BlogCreateNav