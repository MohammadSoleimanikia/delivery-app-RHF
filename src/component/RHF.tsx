import { useForm, FormProvider } from "react-hook-form";
import Input from "./controls/textField";
import {
    foodDeliverySchema,
    type FoodDeliveryFormType,
} from "../types/foodDeliveryForm";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckoutForm from "./forms/checkoutForm";
import DeliveryAddressForm from "./forms/DeliveryAddressForm";
export default function Rhf() {
    // form data is sended by handle submit method in RHF
    const onSubmit = (formData: FoodDeliveryFormType) => {
        console.log(formData);
    };

    // errors sended by handle submit method in RHF
    const onError = (error) => {
        console.log("Errors: ", error);
    };

    const methods = useForm<FoodDeliveryFormType>({
        // resolver used for validation by zod schema
        resolver: zodResolver(foodDeliverySchema),
        // validate form on change of inputs
        mode: "onChange",
        defaultValues: {
            customerName: "",
            email: "",
            mobile: "",
            orderNo: new Date().valueOf(),
            paymentMethod: "online",
            deliveryTime: "30",
            address: {
                streetAddress: "",
                landMark: "",
                city: "",
                state: "",
            },
        },
    });

    // destructing from method
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;
    return (
        <div className="min-h-screen font-light bg-gray-800 flex items-center justify-center p-4">
            {/* Form */}
            {/* use form context to use register, setValue, errors and etc in child without prop drilling */}
            <FormProvider {...methods}>
                <form
                    // handleSubmit have 2 arg onValid and onInvalid that invalid is optional
                    onSubmit={handleSubmit(onSubmit, onError)}
                    className="space-y-8"
                >
                    <div className="space-y-3">
                        <div className="flex gap-1 ">
                            {/* use Reusable Input component */}
                            <Input
                                error={errors.orderNo?.message}
                                {...register("orderNo", {
                                    // convert value of input from string to number
                                    valueAsNumber: true,
                                })}
                                id="orderNo"
                                label="order Number"
                            />
                            <Input
                                error={errors.email?.message}
                                id="email"
                                label="Email"
                                {...register("email", {
                                    required: "email is required",
                                    // custom validation(overridden by zod)
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

                        <div className="flex gap-1">
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
                        </div>
                    </div>

                    <CheckoutForm />
                    <DeliveryAddressForm/>
                    <button
                        type="submit"
                        className="w-full text-sm font-light bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg transition-all duration-1000 transform hover:scale-[1.02] shadow-md"
                    >
                        submit
                    </button>
                </form>
            </FormProvider>
        </div>
    );
}
