export type ProductCategory =
    | "إلكترونيات"
    | "موبايلات"
    | "أثاث"
    | "ملابس"
    | "أجهزة منزلية"
    | "سيارات ومواصلات"
    | "كتب وتعليم"
    | "أدوات ومعدات"
    | "أطفال"
    | "أخرى";

export type GazaCity =
    | "غزة"
    | "خانيونس"
    | "رفح"
    | "دير البلح"
    | "جباليا"
    | "بيت لاهيا"
    | "النصيرات"
    | "الشجاعية"
    | "الرمال"
    | "تل الهوا";

export type ProductCondition = "جديد" | "مستعمل - ممتاز" | "مستعمل - جيد" | "يحتاج صيانة";

export type Product = {
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    category: ProductCategory;
    city: GazaCity;
    condition: ProductCondition;
    images: string[];
    sellerName: string;
    sellerPhone?: string;
    contactMethod?: string;
    createdAt: string;
    isFeatured: boolean;
};

export type CreateProductInput = {
    title: string;
    description: string;
    price: number;
    category: ProductCategory;
    city: GazaCity;
    condition: ProductCondition;
    images: string[];
    sellerName: string;
    sellerPhone?: string;
    contactMethod?: string;
};
