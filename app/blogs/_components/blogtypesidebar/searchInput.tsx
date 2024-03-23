import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchInput = () => {
    return (
        <div className="flex flex-col gap-y-1">
            <Input />
            <Button className="w-20 h-10 ml-auto">Search</Button>
        </div>
    )
}
 
export default SearchInput