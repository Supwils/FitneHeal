import AuthLayout from "../(auth)/layout";
import { SignInButton } from "@clerk/nextjs";
import { NavBar } from "./_components/navbar";

const BrowseLayout = ({ children }: {
    children: React.ReactNode;
} ) => { 

    return (
        <>
            <NavBar />
            <div className="flex h-full pt-20">
            <h1>FitneHeal</h1>
            <SignInButton />
                {children}
            </div>
           
        </>
    )
}

export default BrowseLayout;