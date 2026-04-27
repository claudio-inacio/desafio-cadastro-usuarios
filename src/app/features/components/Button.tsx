import { variantStyles } from "./const";

export type ButtonVariant = "default" | "alert" | "error" | "success";

export type ButtonProps = {
    label?: string;
    handleClick: () => void;
    icon?: React.ElementType;
    variant?: ButtonVariant;
};



export function Button({
    label,
    handleClick,
    icon: Icon,
    variant = "default",
}: ButtonProps) {
    return (
        <button
            onClick={handleClick}
            className={`
        flex items-center gap-2
        text-white
        cursor-pointer
        px-4 py-2 rounded-lg
        text-sm font-medium
        transition
        ${variantStyles[variant]}
      `}
        >
            {Icon && <Icon size={16} className="shrink-0" />}
            {label}
        </button>
    );
}