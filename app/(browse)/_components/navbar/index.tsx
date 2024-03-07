import { Actions } from "./action"
import CommunityEntry from "./comunity-entry"
import { Logo } from "./logo"

export const NavBar = () => {
    return (
        <nav className="fixed top-0 h-20 bg-slate-800 
                        items-center flex w-full z-[50] px-1
                        justify-between">
            <Logo />
            <CommunityEntry />
            <Actions />
        </nav>
    )
}