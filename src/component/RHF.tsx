import { useForm } from "react-hook-form";
import Input from "./controls/textField";
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
                <div className="flex gap-1 mb-2">
                    <div className="flex flex-col">
                        {/* use Reusable Input component */}
                        <Input
                            error={errors.orderNo?.message}
                            {...register("orderNo", {
                                valueAsNumber: true,
                                required: "order number is required",
                            })}
                            id="orderNo"
                            label="order Number"
                        />
                    </div>
                    <div className="flex flex-col">
                        <Input
                            error={errors.email?.message}
                            id="email"
                            label="Email"
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
                                },
                            })}
                        />
                    </div>
                </div>

                <Input
                    id="customerName"
                    label="Customer Name"
                    {...register("customerName")}
                    error={errors.customerName?.message}
                />

                <Input
                    id="mobile"
                    label="Mobile Number"
                    {...register("mobile")}
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
