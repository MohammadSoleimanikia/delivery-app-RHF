import Input from "../controls/textField";
import { useFormContext } from "react-hook-form";
export default function DeliveryAddressForm() {
    const {
        register,
        formState: { errors },
        // type of input used in this form
    } = useFormContext<{
        address: {
            streetAddress: string;
            landMark: string;
            city: string;
            state: string;
        };
    }>();
    return (
        <div className="space-y-3">
            <h2 className="text-white font-bold">Delivery Address</h2>
            <div className="flex gap-1">
                <Input
                    id="streetAddress"
                    label="Street Address"
                    {...register("address.streetAddress")}
                    error={errors.address?.streetAddress?.message}
                />
                <Input
                    id="city"
                    label="city"
                    {...register("address.city")}
                    error={errors.address?.city?.message}
                />
            </div>
            <div className="flex gap-1">
                <Input
                    id="landMark"
                    label="landmark"
                    {...register("address.landMark")}
                    error={errors.address?.landMark?.message}
                />
                <Input
                    id="state"
                    label="state"
                    {...register("address.state")}
                    error={errors.address?.state?.message}
                />
            </div>
        </div>
    );
}
