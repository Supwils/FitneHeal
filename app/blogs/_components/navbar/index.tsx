import { Separator } from "@/components/ui/separator"
import { Actions } from "./action"
import CommunityEntry from "./comunity-entry"
import { Logo } from "./logo"

export const NavBar = async () => {
    const self = false;
    return (
        <nav className="fixed top-0 h-12 bg-amber-400
                        items-center flex w-full z-[50] px-1
                        justify-between shadow-lg">
            <Logo />
            <CommunityEntry />
            {self && (
            <Separator orientation="vertical" className="bg-slate-500 h-10" />
            )}
            <Actions />
        </nav>
    )
}