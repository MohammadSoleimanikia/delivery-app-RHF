import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useId } from "react";

type OptionValue = string | number;
type Option<T extends OptionValue = OptionValue> = {
    text: string;
    value: T;
};

type DropDownProps<T extends OptionValue = OptionValue> = {
    options: Option<T>[];
    label: string;
    placeholder?: string;
    error?: string;
} & Omit<ComponentPropsWithoutRef<"select">, "children">;

const Select = forwardRef<HTMLSelectElement, DropDownProps>(
    ({ options, label, placeholder, error, id, ...restProps }, ref) => {
        const generatedId = useId();
        const selectId = id || generatedId;

        return (
            <div className="w-full">
                <div className="relative">
                    <label
                        htmlFor={selectId}
                        className="block text-sm font-medium text-gray-600 mb-1"
                    >
                        {label}
                    </label>
                    <select
                        ref={ref}
                        id={selectId}
                        className="w-full text-gray-400 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        {...restProps}
                    >
                        {placeholder && (
                            <option value="" disabled hidden>
                                {placeholder}
                            </option>
                        )}
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>

                    
                </div>

                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
        );
    },
);

Select.displayName = "Select";

export default Select;
