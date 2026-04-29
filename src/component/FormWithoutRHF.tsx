import { useState, type ChangeEvent, type SyntheticEvent } from "react";

type FoodDeliveryFormType = {
    customerName: string;
    mobile: string;
};
type FoodDeliveryFormErrorType = {
    customerName: string;
    mobile: string;
};
export default function FormWithoutRHF() {
    const [formData, setFormData] = useState<FoodDeliveryFormType>({
        customerName: "",
        mobile: "",
    });
    const [error, setError] = useState<FoodDeliveryFormErrorType>({
        customerName: "",
        mobile: "",
    });
    const validateFormData = () => {
        const errors: FoodDeliveryFormErrorType = {
            customerName: "",
            mobile: "",
        };
        if (formData.customerName == "")
            errors.customerName = "Customer name is required";
        if (formData.mobile == "") errors.mobile = "mobile is required";
        setError(errors);
        // if every value is empty it return true.
        return Object.values(errors).every((x) => x == "");
    };
    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateFormData()) console.log("form Data", formData);
        else console.log("form is invalid",error);
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
        console.log(formData);
    };
    return (
        <div className="min-h-screen font-light bg-gray-800 flex items-center justify-center p-4">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                    <input
                        value={formData.customerName}
                        name="customerName"
                        onChange={handleChange}
                        type="text"
                        id="customerName"
                        className=" text-sm text-white w-full px-4 pt-5 pb-2 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 peer transition-all"
                        placeholder=" "
                    />
                    <label
                        htmlFor="customerName"
                        className=" absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:-translate-y-0 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-0 px-1"
                    >
                        Name
                    </label>
                </div>

                <div className="relative">
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        onChange={handleChange}
                        value={formData.mobile}
                        className="text-sm text-white w-full px-4 pt-5 pb-2 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 peer transition-all"
                        placeholder=" "
                    />
                    <label
                        htmlFor="mobile"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:-translate-y-0 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-0  px-1"
                    >
                        Mobile number
                    </label>
                </div>

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
