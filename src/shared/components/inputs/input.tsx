import * as React from "react";

function Input({ type = "text", className = "", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={`
        h-10 w-full min-w-0 rounded-lg
        border border-zinc-400
        bg-white
        px-3 py-2
        text-sm text-zinc-900
        outline-none
        transition
        placeholder:text-zinc-400
        focus:border-blue-600
        focus:ring-2
        focus:ring-blue-100
        disabled:cursor-not-allowed
        max-w-full
        disabled:bg-zinc-100
        disabled:text-zinc-500
        disabled:opacity-70
        aria-invalid:border-red-500
        aria-invalid:focus:border-red-500
        aria-invalid:focus:ring-red-100
        ${className}
      `}
      {...props}
    />
  );
}

export { Input };