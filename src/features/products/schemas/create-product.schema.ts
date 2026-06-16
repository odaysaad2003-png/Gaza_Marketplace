import {z} from "zod";

import {GAZA_CITIES, PRODUCT_CATEGORIES, PRODUCT_CONDITIONS} from "../constants/product-options";

const imageUrlSchema = z
.string()
.trim()
.min(1, "رابط الصورة مطلوب")
.refine(
    (value) => value.startsWith("/") || value.startsWith("http://") || value.startsWith("https://"),
    "رابط الصورة يجب أن يبدأ بـ / أو http:// أو https://"
);

export const createProductSchema = z.object({
    title: z
    .string()
    .trim()
    .min(3, "عنوان المنتج يجب أن يحتوي على 3 أحرف على الأقل")
    .max(80, "عنوان المنتج يجب ألا يتجاوز 80 حرفًا"),

    description: z
    .string()
    .trim()
    .min(20, "وصف المنتج يجب أن يحتوي على 20 حرفًا على الأقل")
    .max(700, "وصف المنتج يجب ألا يتجاوز 700 حرف"),

    price: z.coerce
    .number({
        message: "السعر مطلوب",
    })
    .positive("السعر يجب أن يكون أكبر من صفر")
    .max(100000, "السعر كبير جدًا"),

    category: z.enum(PRODUCT_CATEGORIES, {
        message: "اختر تصنيف المنتج",
    }),

    city: z.enum(GAZA_CITIES, {
        message: "اختر المدينة أو المنطقة",
    }),

    condition: z.enum(PRODUCT_CONDITIONS, {
        message: "اختر حالة المنتج",
    }),

    imageUrl: imageUrlSchema,

    sellerName: z
    .string()
    .trim()
    .min(2, "اسم البائع يجب أن يحتوي على حرفين على الأقل")
    .max(50, "اسم البائع يجب ألا يتجاوز 50 حرفًا"),

    sellerPhone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || /^05\d{8}$/.test(value), "رقم الهاتف يجب أن يبدأ بـ 05 ويتكون من 10 أرقام"),

    contactMethod: z.string().trim().max(120, "طريقة التواصل يجب ألا تتجاوز 120 حرفًا").optional(),
});

export type CreateProductFormInput = z.input<typeof createProductSchema>;
export type CreateProductFormValues = z.output<typeof createProductSchema>;