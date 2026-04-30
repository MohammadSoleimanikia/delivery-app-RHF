// when use zod for validation RHF validation ignored
import z from "zod";
export const foodDeliverySchema = z.object({
    orderNo: z.number("ورودی باید عدد باشد"),
    customerName: z.string().min(1, "نام الزامی است"),
    mobile: z
        .string()
        .length(11, "تلفن باید 11 رقمی باشد")
        .regex(/^09[0-9]{2}-?[0-9]{3}-?[0-9]{4}$/, "شماره موبایل معتبر نیست"),
    email: z
        .string()
        .email("فرمت ایمیل صحیح نمیباشد ")
        // use refine for adding custom validation 
        .refine((value) => value !== "email@gmail.com",{message:"particular email is blocked"})
        .optional(),
});
export type FoodDeliveryFormType = z.infer<typeof foodDeliverySchema>;
