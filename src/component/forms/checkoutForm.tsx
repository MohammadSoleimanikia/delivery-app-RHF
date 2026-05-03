import type { FoodDeliveryFormType } from "../../types/foodDeliveryForm";
import type { Options } from "../../types/selectInput";
import Select from "../controls/select";
import { useFormContext } from "react-hook-form";
export default function CheckoutForm() {
    // get methods from form context
    const { register } = useFormContext<FoodDeliveryFormType>();
    const deliveryOptions: Options = [
        {
            text: "Online",
            value: "online",
        },
        {
            text: "Cash On delivery",
            value: "cod",
        },
    ];

    const deliveryTime: Options = [
        {
            text: "30 min",
            value: "30",
        },
        {
            text: "1 hour",
            value: "60",
        },
        {
            text: "2 hour",
            value: "120",
        },

        {
            text: "3 hour",
            value: "180",
        },
    ];
    return (
        <div>
            <h2 className="text-white font-bold">Checkout details</h2>
            <div className="flex gap-1">
                <Select
                    id="paymentOption"
                    label="Order Type"
                    {...register("paymentMethod")}
                    options={deliveryOptions}
                />
                <Select
                    id="orderTime"
                    label="Order Time"
                    {...register("deliveryTime")}
                    options={deliveryTime}
                />
            </div>
        </div>
    );
}
