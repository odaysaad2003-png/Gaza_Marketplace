import type {GazaCity, ProductCategory, ProductCondition} from "../types/product.types";

export const PRODUCT_CATEGORIES: ProductCategory[] = [
    "إلكترونيات",
    "موبايلات",
    "أثاث",
    "ملابس",
    "أجهزة منزلية",
    "سيارات ومواصلات",
    "كتب وتعليم",
    "أدوات ومعدات",
    "أطفال",
    "أخرى",
];

export const GAZA_CITIES: GazaCity[] = [
    "غزة",
    "خانيونس",
    "رفح",
    "دير البلح",
    "جباليا",
    "بيت لاهيا",
    "النصيرات",
    "الشجاعية",
    "الرمال",
    "تل الهوا",
];

export const PRODUCT_CONDITIONS: ProductCondition[] = ["جديد", "مستعمل - ممتاز", "مستعمل - جيد", "يحتاج صيانة"];
