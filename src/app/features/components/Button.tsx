type ButtonProps = {
    label: string;
    handleClick: () => void;
};

export function Button({ label, handleClick }: ButtonProps) {
    return (
        <button
            onClick={() => handleClick()}
            className="
            flex items-center gap-2
            bg-blue-600 text-white
            cursor-pointer
            px-4 py-2 rounded-lg
            text-sm font-medium
            hover:bg-blue-700
            transition
          "
        >
            {/* <Plus size={16} /> */}
            {label}
        </button>
    );
}