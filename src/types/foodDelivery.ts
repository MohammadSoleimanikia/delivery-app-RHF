import z from "zod";
export const foodDeliverySchema=z.object({
    orderNo: z.coerce.number().min(1,"نام الزامی است"),
    customerName: z.string(),
    mobile: z.string().length(11,"تلفن باید 11 رقمی باشد") .regex(/^09[0-9]{2}-?[0-9]{3}-?[0-9]{4}$/, "شماره موبایل معتبر نیست"),
    email: z.string().email("فرمت ایمیل صحیح نمیباشد "),
})
export type FoodDeliveryFormType = z.infer<typeof foodDeliverySchema>