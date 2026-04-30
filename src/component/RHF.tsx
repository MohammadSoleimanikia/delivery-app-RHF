import { useForm } from "react-hook-form";
import Input from "./Input";
import {
    foodDeliverySchema,
    type FoodDeliveryFormType,
} from "../types/foodDelivery";
import { zodResolver } from "@hookform/resolvers/zod";
export default function Rhf() {
    // form data is sended by handle submit method in RHF
    const onSubmit = (formData: FoodDeliveryFormType) => {
        console.log(formData);
    };
    const onError = (error) => {
        console.log("Errors: ", error);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FoodDeliveryFormType>({
        resolver: zodResolver(foodDeliverySchema),
        mode: "onChange",
        defaultValues: {
            customerName: "",
            email: "",
            mobile: "",
            orderNo: 0,
        },
    });
    return (
        <div className="min-h-screen font-light bg-gray-800 flex items-center justify-center p-4">
            {/* Form */}
            <form
                // handleSubmit have 2 arg onValid and onInvalid that invalid is optional
                onSubmit={handleSubmit(onSubmit, onError)}
                className="space-y-8"
            >
                <div className="flex mb-2">
                    <div className="flex flex-col">
                        <div className="relative">
                            <input
                                type="number"
                                id="orderNo"
                                className=" text-sm text-white w-full px-4 pt-5 pb-2 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 peer transition-all"
                                placeholder=""
                                {...register("orderNo", {
                                    valueAsNumber: true,
                                    required: "order number is required",
                                })}
                            />
                            <label
                                htmlFor="orderNo"
                                className=" absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:-translate-y-0 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-0 px-1"
                            >
                                Order Number
                            </label>
                            {errors.orderNo?.message && (
                                <p className="error">
                                    {errors.orderNo?.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                className=" text-sm text-white w-full px-4 pt-5 pb-2 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 peer transition-all"
                                placeholder=""
                                {...register("email", {
                                    required: "email is required",
                                    validate: {
                                        notFake: (value) => {
                                            console.log("Validating:", value);
                                            if (value === "email@gmail.com") {
                                                return "particular email is blocked";
                                            }
                                            return true;
                                        },
                                    }
                                })}
                            />
                            <label
                                htmlFor="email"
                                className=" absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:-translate-y-0 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-0 px-1"
                            >
                                email
                            </label>
                            {errors.email?.message && (
                                <p className="error">{errors.email?.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* use Reusable Input component */}
                <Input
                    id="customerName"
                    label="Customer Name"
                    register={register}
                    error={errors.customerName?.message}
                />

                <Input
                    id="mobile"
                    label="Mobile Number"
                    register={register}
                    error={errors.mobile?.message}
                />
                <button
                    type="submit"
                    className="w-full text-sm font-extralight bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md"
                >
                    submit
                </button>
            </form>
        </div>
    );
}
