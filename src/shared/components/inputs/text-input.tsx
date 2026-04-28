import React from "react";
import {
    Controller,
    type Control,
    type FieldError,
    type FieldValues,
    type Path,
} from "react-hook-form";

import { Input } from "./input";

type BaseInputTextProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "name" | "type"
> & {
    id: string;
    inputLabel?: string;
    error?: FieldError;
    optionalErrorMessage?: string;
    isLoading?: boolean;
    disabled?: boolean;
    icon?: React.ElementType;
    iconClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    containerClassName?: string;
    errorClassName?: string;
    formatValueMask?: (value: string) => string | undefined;
};

type ControlledInputTextProps<T extends FieldValues> = BaseInputTextProps & {
    control: Control<T>;
    name: Path<T>;
};

type UncontrolledInputTextProps = BaseInputTextProps & {
    control?: never;
    name?: string;
};

type InputTextProps<T extends FieldValues> =
    | ControlledInputTextProps<T>
    | UncontrolledInputTextProps;

const InputText = <T extends FieldValues>({
    id,
    inputLabel,
    error,
    optionalErrorMessage,
    isLoading = false,
    disabled = false,
    icon: Icon,
    iconClassName = "",
    labelClassName = "",
    inputClassName = "",
    containerClassName = "",
    errorClassName = "",
    formatValueMask,
    placeholder,
    autoComplete,
    maxLength,
    minLength,
    ...rest
}: InputTextProps<T>) => {
    const isControlled = "control" in rest && !!rest.control;
    const hasIcon = !!Icon;

    const commonInputProps = {
        id,
        type: "text" as const,
        placeholder,
        autoComplete,
        maxLength,
        minLength,
        disabled: isLoading || disabled,
        "aria-invalid": !!error,
        className: `
      ${hasIcon ? "pl-10" : ""}
      ${inputClassName}
    `,
    };

    return (
        <div className={`w-full max-w-full min-w-0 space-y-2 ${containerClassName}`}>
            {inputLabel && (
                <label
                    htmlFor={id}
                    className={`block text-sm font-medium text-zinc-800 ${labelClassName}`}
                >
                    {inputLabel}
                </label>
            )}

            <div className="relative w-full max-w-full min-w-0">
                {Icon && (
                    <Icon
                        size={16}
                        className={`
              pointer-events-none absolute left-3 top-1/2
              -translate-y-1/2
              ${error ? "text-red-500" : "text-zinc-500"}
              ${iconClassName}
            `}
                    />
                )}

                {isControlled ? (
                    <Controller
                        name={rest.name as Path<T>}
                        control={rest.control as Control<T>}
                        render={({ field }) => (
                            <Input
                                {...field}
                                {...commonInputProps}
                                value={field.value ?? ""}
                                onChange={(e) => {
                                    const formatted = formatValueMask
                                        ? formatValueMask(e.target.value)
                                        : e.target.value;

                                    field.onChange(formatted || e.target.value);
                                }}
                            />
                        )}
                    />
                ) : (
                    <Input
                        {...rest}
                        {...commonInputProps}
                        onChange={(e) => {
                            const formatted = formatValueMask
                                ? formatValueMask(e.target.value)
                                : e.target.value;

                            if (rest.onChange) {
                                const syntheticEvent = {
                                    ...e,
                                    target: {
                                        ...e.target,
                                        value: formatted,
                                    },
                                    currentTarget: {
                                        ...e.currentTarget,
                                        value: formatted,
                                    },
                                } as React.ChangeEvent<HTMLInputElement>;

                                rest.onChange(syntheticEvent);
                            }
                        }}
                    />
                )}
            </div>

            {error && (
                <p className={`text-sm font-medium text-red-600 ${errorClassName}`}>
                    {optionalErrorMessage ?? error.message}
                </p>
            )}
        </div>
    );
};

export default InputText;