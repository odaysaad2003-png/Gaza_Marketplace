"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {Loader2, PackagePlus} from "lucide-react";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {GAZA_CITIES, PRODUCT_CATEGORIES, PRODUCT_CONDITIONS} from "../constants/product-options";
import {useCreateProduct} from "../hooks/use-create-product";
import {
    createProductSchema,
    type CreateProductFormInput,
    type CreateProductFormValues,
} from "../schemas/create-product.schema";

export function CreateProductForm() {
    const router = useRouter();
    const createProductMutation = useCreateProduct();

 const form = useForm<CreateProductFormInput, unknown, CreateProductFormValues>({
     resolver: zodResolver(createProductSchema),
     defaultValues: {
         title: "",
         description: "",
         price: "",
         category: undefined,
         city: undefined,
         condition: undefined,
         imageUrl: "",
         sellerName: "",
         sellerPhone: "",
         contactMethod: "",
     },
 });

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {errors},
    } = form;

    const selectedCategory = watch("category");
    const selectedCity = watch("city");
    const selectedCondition = watch("condition");

    async function onSubmit(values: CreateProductFormValues) {
        const createdProduct = await createProductMutation.mutateAsync({
            title: values.title,
            description: values.description,
            price: values.price,
            category: values.category,
            city: values.city,
            condition: values.condition,
            images: [values.imageUrl],
            sellerName: values.sellerName,
            sellerPhone: values.sellerPhone || undefined,
            contactMethod: values.contactMethod || undefined,
        });

        router.push(`/products/${createdProduct.slug}`);
    }

    return (
        <Card className="rounded-[2rem] border-primary/10 shadow-sm">
            <CardHeader className="space-y-2">
                <CardTitle className="flex items-center gap-2 text-2xl">
                    <PackagePlus className="h-6 w-6 text-primary" />
                    بيانات المنتج
                </CardTitle>

                <p className="text-sm leading-6 text-muted-foreground">
                    املأ بيانات المنتج بدقة حتى يظهر بشكل واضح للمشترين داخل غزة.
                </p>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid gap-5 lg:grid-cols-2">
                        <FormField label="عنوان المنتج" error={errors.title?.message}>
                            <Input placeholder="مثال: هاتف سامسونج Galaxy A52" {...register("title")} />
                        </FormField>

                        <FormField label="السعر بالشيكل" error={errors.price?.message}>
                            <Input type="number" inputMode="numeric" placeholder="مثال: 750" {...register("price")} />
                        </FormField>
                    </div>

                    <FormField label="وصف المنتج" error={errors.description?.message}>
                        <textarea
                            rows={6}
                            placeholder="اكتب وصفًا واضحًا عن حالة المنتج، مدة الاستخدام، سبب البيع، وأي تفاصيل مهمة..."
                            className="flex min-h-32 w-full rounded-md border border-input bg-transparent px-3 py-3 text-sm shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
                            {...register("description")}
                        />
                    </FormField>

                    <div className="grid gap-5 lg:grid-cols-3">
                        <FormField label="التصنيف" error={errors.category?.message}>
                            <Select
                                value={selectedCategory}
                                onValueChange={(value) =>
                                    setValue("category", value as CreateProductFormInput["category"], {
                                        shouldValidate: true,
                                    })
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="اختر التصنيف" />
                                </SelectTrigger>
                                <SelectContent>
                                    {PRODUCT_CATEGORIES.map((category) => (
                                        <SelectItem key={category} value={category}>
                                            {category}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormField>

                        <FormField label="المدينة / المنطقة" error={errors.city?.message}>
                            <Select
                                value={selectedCity}
                                onValueChange={(value) =>
                                    setValue("city", value as CreateProductFormInput["city"], {
                                        shouldValidate: true,
                                    })
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="اختر المدينة" />
                                </SelectTrigger>
                                <SelectContent>
                                    {GAZA_CITIES.map((city) => (
                                        <SelectItem key={city} value={city}>
                                            {city}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormField>

                        <FormField label="حالة المنتج" error={errors.condition?.message}>
                            <Select
                                value={selectedCondition}
                                onValueChange={(value) =>
                                    setValue("condition", value as CreateProductFormInput["condition"], {
                                        shouldValidate: true,
                                    })
                                }
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="اختر الحالة" />
                                </SelectTrigger>
                                <SelectContent>
                                    {PRODUCT_CONDITIONS.map((condition) => (
                                        <SelectItem key={condition} value={condition}>
                                            {condition}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormField>
                    </div>

                    <FormField label="رابط صورة المنتج" error={errors.imageUrl?.message}>
                        <Input
                            dir="ltr"
                            placeholder="/products/samsung-galaxy-a52.webp أو https://..."
                            {...register("imageUrl")}
                        />
                    </FormField>

                    <div className="rounded-[2rem] border bg-muted/30 p-5">
                        <h3 className="mb-5 font-semibold">بيانات البائع</h3>

                        <div className="grid gap-5 lg:grid-cols-2">
                            <FormField label="اسم البائع" error={errors.sellerName?.message}>
                                <Input placeholder="مثال: مهند أبو محمد" {...register("sellerName")} />
                            </FormField>

                            <FormField label="رقم الهاتف" error={errors.sellerPhone?.message}>
                                <Input dir="ltr" placeholder="0598123456" {...register("sellerPhone")} />
                            </FormField>
                        </div>

                        <div className="mt-5">
                            <FormField label="طريقة التواصل المفضلة" error={errors.contactMethod?.message}>
                                <Input placeholder="مثال: يفضل التواصل عبر واتساب" {...register("contactMethod")} />
                            </FormField>
                        </div>
                    </div>

                    {createProductMutation.isError ? (
                        <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                            حدث خطأ أثناء نشر المنتج. حاول مرة أخرى.
                        </div>
                    ) : null}

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.push("/products")}
                            disabled={createProductMutation.isPending}
                        >
                            إلغاء
                        </Button>

                        <Button type="submit" disabled={createProductMutation.isPending} className="min-w-40">
                            {createProductMutation.isPending ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    جارٍ النشر...
                                </>
                            ) : (
                                <>
                                    <PackagePlus className="h-4 w-4" />
                                    نشر المنتج
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

type FormFieldProps = {
    label: string;
    error?: string;
    children: React.ReactNode;
};

function FormField({label, error, children}: FormFieldProps) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">{label}</label>
            {children}
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
        </div>
    );
}
