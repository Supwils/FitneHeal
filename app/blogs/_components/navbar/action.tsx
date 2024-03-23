import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpenText, Medal, User } from "lucide-react";
import UserMenu from "./UserMenu";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { useRouter } from "next/navigation";

export const Actions = async () => {

    const user = await getCurrentUser();

    return (
        <div className="flex item-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!user && (
                <UserMenu />
            )}
            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary"
                        asChild
                    >
                        <Link href={`/${user.name}`}>
                            <Medal className="h-5 w-5 lg:mr-2"/>
                            <span className=" hidden lg:block">
                                User
                            </span>
                        </Link>
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-primary"
                        asChild
                    >
                        <Link href={`/my/${user.name}`}>
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
                        <Link href={`/profile/${user.name}`}>
                            <BookOpenText className="h-5 w-5 lg:mr-2"/>
                            <span className=" hidden lg:block">
                                Profile
                            </span>
                        </Link>
                    </Button>
                    <UserMenu currentUser={user}/>
                </div>
            )}
        </div>
    )
}