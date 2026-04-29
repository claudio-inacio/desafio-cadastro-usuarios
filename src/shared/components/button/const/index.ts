import type { ButtonVariant } from "../Button";


export const variantStyles: Record<ButtonVariant, string> = {
    disabled: "cursor-default bg-gray-300 hover:bg-gray-300",
    default: "bg-blue-600 hover:bg-blue-700",
    alert: "bg-orange-500 hover:bg-orange-600",
    error: "bg-red-600 hover:bg-red-700",
    success: "bg-green-600 hover:bg-green-700",
};