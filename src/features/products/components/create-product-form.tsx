"use client";

import type {ReactNode} from "react";
import Image from "next/image";
import {zodResolver} from "@hookform/resolvers/zod";
import {ImageIcon, Info, Loader2, MapPin, PackagePlus, Phone, Tag, UserRound} from "lucide-react";
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
    const imageUrl = watch("imageUrl");

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
        <Card className="min-w-0 overflow-hidden rounded-[1.75rem] border-border/70 bg-card/90 shadow-sm shadow-black/[0.03] sm:rounded-[2rem]">
            <CardHeader className="border-b border-border/70 bg-muted/25 p-5 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                    <PackagePlus className="h-6 w-6 shrink-0 text-primary" />
                    بيانات المنتج
                </CardTitle>

                <p className="text-sm leading-6 text-muted-foreground">
                    قسّمنا النموذج إلى خطوات واضحة حتى يكون الإدخال أسهل وأقرب لتجربة Marketplace حقيقية.
                </p>
            </CardHeader>

            <CardContent className="p-5 sm:p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                    <FormSection
                        icon={<Tag className="h-5 w-5" />}
                        title="معلومات المنتج الأساسية"
                        description="اكتب عنوانًا واضحًا ووصفًا يساعد المشتري يفهم المنتج بسرعة."
                    >
                        <div className="grid gap-5 md:grid-cols-2">
                            <FormField
                                label="عنوان المنتج"
                                helper="مثال: هاتف سامسونج Galaxy A52 بحالة ممتازة"
                                error={errors.title?.message}
                            >
                                <Input
                                    className="rounded-2xl"
                                    placeholder="مثال: هاتف سامسونج Galaxy A52"
                                    {...register("title")}
                                />
                            </FormField>

                            <FormField
                                label="السعر بالشيكل"
                                helper="اكتب السعر النهائي أو السعر المتوقع للبيع."
                                error={errors.price?.message}
                            >
                                <Input
                                    className="rounded-2xl"
                                    type="number"
                                    inputMode="numeric"
                                    placeholder="مثال: 750"
                                    {...register("price")}
                                />
                            </FormField>
                        </div>

                        <FormField
                            label="وصف المنتج"
                            helper="اذكر حالة المنتج، مدة الاستخدام، سبب البيع، وأي ملاحظات مهمة."
                            error={errors.description?.message}
                        >
                            <textarea
                                rows={6}
                                placeholder="اكتب وصفًا واضحًا عن حالة المنتج، مدة الاستخدام، سبب البيع، وأي تفاصيل مهمة..."
                                className="flex min-h-36 w-full rounded-2xl border border-input bg-background/70 px-4 py-3 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
                                {...register("description")}
                            />
                        </FormField>
                    </FormSection>

                    <FormSection
                        icon={<MapPin className="h-5 w-5" />}
                        title="التصنيف والموقع"
                        description="هذه البيانات تساعد المستخدمين في البحث والفلترة."
                    >
                        <div className="grid gap-5 md:grid-cols-3">
                            <FormField label="التصنيف" error={errors.category?.message}>
                                <Select
                                    value={selectedCategory}
                                    onValueChange={(value) =>
                                        setValue("category", value as CreateProductFormInput["category"], {
                                            shouldValidate: true,
                                            shouldDirty: true,
                                        })
                                    }
                                >
                                    <SelectTrigger className="rounded-2xl">
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
                                            shouldDirty: true,
                                        })
                                    }
                                >
                                    <SelectTrigger className="rounded-2xl">
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
                                            shouldDirty: true,
                                        })
                                    }
                                >
                                    <SelectTrigger className="rounded-2xl">
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
                    </FormSection>

                    <FormSection
                        icon={<ImageIcon className="h-5 w-5" />}
                        title="صورة المنتج"
                        description="في هذه المرحلة نستخدم رابط صورة واحد فقط، ويمكن لاحقًا تطويرها لرفع صور متعددة."
                    >
                        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_16rem]">
                            <FormField
                                label="رابط صورة المنتج"
                                helper="مثال: /products/samsung-galaxy-a52.webp أو رابط https خارجي."
                                error={errors.imageUrl?.message}
                            >
                                <Input
                                    className="rounded-2xl"
                                    dir="ltr"
                                    placeholder="/products/samsung-galaxy-a52.webp أو https://..."
                                    {...register("imageUrl")}
                                />
                            </FormField>

                            <ImagePreview imageUrl={imageUrl} />
                        </div>
                    </FormSection>

                    <FormSection
                        icon={<UserRound className="h-5 w-5" />}
                        title="بيانات البائع"
                        description="اكتب بيانات تواصل واضحة. في هذا المشروع البيانات تدريبية وليست حقيقية."
                    >
                        <div className="grid gap-5 md:grid-cols-2">
                            <FormField
                                label="اسم البائع"
                                helper="اكتب اسمًا واضحًا يظهر داخل صفحة المنتج."
                                error={errors.sellerName?.message}
                            >
                                <Input
                                    className="rounded-2xl"
                                    placeholder="مثال: مهند أبو محمد"
                                    {...register("sellerName")}
                                />
                            </FormField>

                            <FormField
                                label="رقم الهاتف"
                                helper="اختياري. يجب أن يبدأ بـ 05 ويتكون من 10 أرقام."
                                error={errors.sellerPhone?.message}
                            >
                                <Input
                                    className="rounded-2xl"
                                    dir="ltr"
                                    placeholder="0598123456"
                                    {...register("sellerPhone")}
                                />
                            </FormField>
                        </div>

                        <FormField
                            label="طريقة التواصل المفضلة"
                            helper="اختياري. مثال: يفضل التواصل عبر واتساب بعد العصر."
                            error={errors.contactMethod?.message}
                        >
                            <Input
                                className="rounded-2xl"
                                placeholder="مثال: يفضل التواصل عبر واتساب"
                                {...register("contactMethod")}
                            />
                        </FormField>
                    </FormSection>

                    {createProductMutation.isError ? (
                        <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm leading-6 text-destructive">
                            حدث خطأ أثناء نشر المنتج. حاول مرة أخرى.
                        </div>
                    ) : null}

                    <div className="grid gap-3 border-t border-border/70 pt-5 sm:flex sm:justify-end sm:pt-6">
                        <Button
                            type="button"
                            variant="outline"
                            className="w-full rounded-full px-6 sm:w-auto"
                            onClick={() => router.push("/products")}
                            disabled={createProductMutation.isPending}
                        >
                            إلغاء
                        </Button>

                        <Button
                            type="submit"
                            disabled={createProductMutation.isPending}
                            className="w-full rounded-full px-6 shadow-sm shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 sm:w-auto sm:min-w-44"
                        >
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

type FormSectionProps = {
    icon: ReactNode;
    title: string;
    description: string;
    children: ReactNode;
};

function FormSection({icon, title, description, children}: FormSectionProps) {
    return (
        <section className="rounded-[1.5rem] border border-border/70 bg-background/60 p-4 sm:rounded-[1.75rem] sm:p-5">
            <div className="mb-5 flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-11 sm:w-11">
                    {icon}
                </div>

                <div className="min-w-0">
                    <h3 className="font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
                </div>
            </div>

            <div className="space-y-5">{children}</div>
        </section>
    );
}

type FormFieldProps = {
    label: string;
    helper?: string;
    error?: string;
    children: ReactNode;
};

function FormField({label, helper, error, children}: FormFieldProps) {
    return (
        <div className="min-w-0 space-y-2">
            <label className="text-sm font-bold text-foreground">{label}</label>
            {children}

            {helper && !error ? (
                <p className="flex items-start gap-1.5 text-xs leading-5 text-muted-foreground">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span>{helper}</span>
                </p>
            ) : null}

            {error ? <p className="text-sm leading-6 text-destructive">{error}</p> : null}
        </div>
    );
}

function ImagePreview({imageUrl}: {imageUrl?: string}) {
    const previewUrl = imageUrl?.trim() ?? "";

    const canPreview =
        previewUrl.startsWith("/") || previewUrl.startsWith("http://") || previewUrl.startsWith("https://");

    if (!canPreview) {
        return (
            <div className="flex min-h-44 flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-muted/40 p-5 text-center xl:min-h-40">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
                <p className="mt-3 text-sm font-medium text-foreground">معاينة الصورة</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">ستظهر الصورة هنا عند إدخال رابط صحيح.</p>
            </div>
        );
    }

    return (
        <div className="relative min-h-44 overflow-hidden rounded-3xl border border-border/70 bg-muted xl:min-h-40">
            <Image
                src={previewUrl}
                alt="معاينة صورة المنتج"
                fill
                sizes="(min-width: 1280px) 256px, 100vw"
                className="object-cover"
                unoptimized
            />
        </div>
    );
}
