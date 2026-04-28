import { useState } from "react";

type FoodDeliveryFormType = {
    customerName: string;
    mobile: string;
};
export default function FoodDeliveryForm() {
    const [formData, setFormData] = useState<FoodDeliveryFormType>({
        customerName: "",
        mobile: "",
    });
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl max-w-md w-full p-6 border border-gray-100">

                {/* Form */}
                <form  className="space-y-8">
                    <div className="relative">
                        <input
                            type="text"
                            id="customerName"
                            className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 peer transition-all"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="customerName"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:-translate-y-0 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-0 bg-white px-1"
                        >
                            نام و نام خانوادگی
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="tel"
                            id="mobile"
                            className="w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 peer transition-all"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="mobile"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:-translate-y-0 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-0 bg-white px-1"
                        >
                            شماره موبایل
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md"
                    >
                        ثبت اطلاعات
                    </button>
                </form>
            </div>
        </div>
    );
}
