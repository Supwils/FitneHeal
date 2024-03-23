import SearchInput from './searchInput'
import TypeAccording from './typeAccording'

const TypeSideBar = () => {
    return (
        <div className='flex flex-col ml-2 w-1/5 h-auto pt-5 gap-5'>
            <SearchInput />
            <TypeAccording />
        </div>
    )
}

export default TypeSideBar