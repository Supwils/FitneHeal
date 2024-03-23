import { Checkbox } from "@/components/ui/checkbox"

interface TypeItemProps { 
    id: string;
    label: string;
}
const TypeItem = ({id, label}:TypeItemProps) => {
    return (
        <div className="flex flex-row space-x-1">
            <Checkbox key={id} />
            <div className="font-medium text-sm not-italic font-mono">{label}</div>
        </div>
    )
}
export default TypeItem