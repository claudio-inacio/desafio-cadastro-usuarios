import { variantStyles } from "./const";

export type ButtonVariant = "default" | "alert" | "error" | "success" | "disabled";

export type ButtonProps = {
    label?: string;
    handleClick: () => void;
    icon?: React.ElementType;
    variant?: ButtonVariant;
    disabled?: boolean
};



export function Button({
    label,
    handleClick,
    icon: Icon,
    variant = "default",
    disabled = false
}: ButtonProps) {
    
    return (
        <button
            onClick={disabled ? () => { } : handleClick}
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