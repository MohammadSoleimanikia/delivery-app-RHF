import type { ComponentPropsWithoutRef } from "react";
import type { FieldPath } from "react-hook-form";
import type { FoodDeliveryFormType } from "../../types/foodDelivery";

type InputProps = ComponentPropsWithoutRef<"input"> & {
    id: FieldPath<FoodDeliveryFormType>;
    label: string;
    error?: string;
    type?: string;
};

export default function Input({
    id,
    label,
    error,
    type = "text",
    ...restProps
}: InputProps) {
    return (
        <div>
            <div className="relative">
                <input
                    type={type}
                    id={id}
                    className="text-sm text-white w-full px-4 pt-5 pb-2 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 peer transition-all"
                    placeholder=" "
                    {...restProps}
                />
                <label
                    htmlFor={id}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:-translate-y-0 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-0 px-1"
                >
                    {label}
                </label>
            </div>
            {error && <p className="error mt-1 text-sm">{error}</p>}
        </div>
    );
}
