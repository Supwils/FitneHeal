import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs"

import { BookOpenText, Medal } from "lucide-react";


export const Actions = async () => {

    const user = await currentUser();

    return (
        <div className="flex item-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!user && (
                <SignInButton>
                    <Button
                        size="sm"
                        variant="default"
                    >
                        Login
                    </Button>
                </SignInButton>
            )}
            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary"
                        asChild
                    >
                        <Link href={`/myspace/${user.username}`}>
                            <Medal className="h-5 w-5 lg:mr-2"/>
                            <span className=" hidden lg:block">
                                MySpace
                            </span>
                        </Link>
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary"
                        asChild
                    >
                        <Link href={`/profile/${user.username}`}>
                            <BookOpenText className="h-5 w-5 lg:mr-2"/>
                            <span className=" hidden lg:block">
                                Profile
                            </span>
                        </Link>
                    </Button>
                    <UserButton
                        afterSignOutUrl="/"
                    />
                </div>
            )}
        </div>
    )
}