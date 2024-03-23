'use client';

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "@/components/Avatar";
import MenuItem from "./MenuItem";
import { useCallback, useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface UserMenuProps { 
    currentUser?: User | null;
}

const UserMenu = ({
    currentUser
}: UserMenuProps) => {
    const router = useRouter();
    const LoginModal = useLoginModal();
    const RegisterModal = useRegisterModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3 mr-[10px]">
                <div
                    onClick={(toggleOpen)}
                    className="
                        mr-auto
                        p-4
                        md:py-1
                        md:px-2
                        broder-[1px]
                        broder-neural-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-sm
                        transition"
                >
                    <AiOutlineMenu />
                    <div
                        className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="
                    
                    absolute
                    rounded-xl
                    shadow-md
                    w-[40vh]
                    md:w-3/4
                    bg-white
                    overflow-hidden
                    hover:shadow-lg
                    right-0
                    top-12
                    text-sm">
                    <div className="flex flex-col cursor-pointer">
                    {currentUser ? (
                           <>  
                                <MenuItem
                               onClick={()=>signOut()}
                               label='Logout'
                                />
                       </> 
                        ) : (
                        <>  
                            <MenuItem
                                onClick={LoginModal.onOpen}
                                label='Login'
                            />
                            <MenuItem
                                onClick={RegisterModal.onOpen}
                                label='SignUp'
                            />
                        </>
                    )}
                    
                    </div>
                </div>
                
            )}       
        </div>
    );
}
export default UserMenu;