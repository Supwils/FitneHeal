import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const font = Poppins({
    subsets: ['latin'],
    weight:["200","300","400","500","600","700","800"],
})

export const Logo = () => {
    return (
        <Link href="/">
        <div className="flex hover:opacity-70">
            <Image className="rounded-full mr-3"src="/logo.jpg" alt="logo" width={50} height={50} />
            
            <div className={cn("hidden md:block",font.className)}>
                    <p className='text-lg font-semibold'>
                        FineHeal
                    </p>
                    <p className='text-xs text-muted-foreground'>
                        Make Friends with Yourself
                    </p>
            </div>
        </div>
            
            
        </Link>
    )
}