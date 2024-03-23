import { NavBar } from "./_components/navbar";
import LoginModal from "@/components/modal/LoginModal";
import ClientOnly from "./_components/navbar/ClientOnly";
import RegisterModal from "@/components/modal/RegisterModal";

const BrowseLayout = ({ children }: {
    children: React.ReactNode;
} ) => { 

    return (
        <>
            <NavBar />
            <ClientOnly>
              <LoginModal />
              <RegisterModal />
            </ClientOnly>
            <div className="flex h-full pt-20">
                {children}
            </div>
           
        </>
    )
}

export default BrowseLayout;