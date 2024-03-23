'use client';

interface MenuItemProps {
    onClick: () => void;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
  }) => {
    return (
        <div
            onClick={onClick}
            className="
                px-3
                py-2
                hover:bg-slate-200
                transition
                font-semibold
                text-md
                text-stone-700
            "
        >
            {label}

        </div>
    )
}
export default MenuItem;