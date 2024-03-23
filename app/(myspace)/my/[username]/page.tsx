interface MySpaceLayoutProps { 
    children: React.ReactNode
    params:{username:string}
}


const MySpaceLayout = ({
    children,
    params
}: MySpaceLayoutProps) => {
    return (
        <>
            <div>
                Myspace
            </div>
            {children}
        </>
    )
}

export default MySpaceLayout