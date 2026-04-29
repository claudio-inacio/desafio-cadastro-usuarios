import { variantStyles } from "./const";

export type ButtonVariant = "default" | "alert" | "error" | "success" | "disabled";
export type ButtonType = "button" | "submit";

export type ButtonProps = {
    label?: string | React.ReactElement;
    handleClick?: () => void;
    icon?: React.ElementType;
    variant?: ButtonVariant;
    disabled?: boolean;
    type: ButtonType;
};



export function Button({
    label,
    handleClick,
    icon: Icon,
    variant = "default",
    disabled = false,
    type = "button"
}: ButtonProps) {
    return (
        <button
            disabled={disabled}
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
            type={type}
        >
            {Icon && <Icon size={16} className="shrink-0" />}
            {label}
        </button>
    );
}