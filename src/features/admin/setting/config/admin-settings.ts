import {
    Bell,
    Database,
    Eye,
    EyeOff,
    Globe2,
    Lock,
    MessageCircle,
    PackageCheck,
    ShieldCheck,
    Sparkles,
    Store,
    ToggleLeft,
} from "lucide-react";

export const marketplaceSettings = [
    {
        label: "اسم السوق",
        value: "Mini Marketplace Gaza",
        description: "الاسم الظاهر في واجهة السوق العامة ولوحة التحكم.",
        icon: Store,
    },
    {
        label: "نطاق الخدمة",
        value: "قطاع غزة",
        description: "النطاق الجغرافي المستهدف للمنتجات والبائعين.",
        icon: Globe2,
    },
    {
        label: "وضع النظام",
        value: "تجريبي / Portfolio",
        description: "النظام يعمل حاليًا ببيانات Mock بدون Backend حقيقي.",
        icon: Sparkles,
    },
];

export const moderationSettings = [
    {
        label: "مراجعة المنتجات قبل النشر",
        enabled: true,
        description: "محاكاة لسلوك إداري حقيقي قبل ظهور المنتج في السوق.",
        icon: ShieldCheck,
    },
    {
        label: "السماح بالمنتجات المميزة",
        enabled: true,
        description: "إظهار منتجات مختارة كمنتجات مميزة في الصفحة الرئيسية.",
        icon: PackageCheck,
    },
    {
        label: "إخفاء المنتجات التي تحتاج صيانة",
        enabled: false,
        description: "خيار مستقبلي لإخفاء المنتجات ذات الحالة الضعيفة.",
        icon: EyeOff,
    },
    {
        label: "تنبيه عند نقص بيانات المنتج",
        enabled: true,
        description: "إظهار تنبيه إداري عند وجود بيانات تواصل أو وصف غير مكتمل.",
        icon: Bell,
    },
];

export const contactPolicySettings = [
    {
        label: "عرض رقم البائع",
        enabled: true,
        description: "يعرض رقم التواصل داخل صفحة تفاصيل المنتج.",
        icon: MessageCircle,
    },
    {
        label: "رسالة أمان للمشتري",
        enabled: true,
        description: "تنبيه المستخدم للتأكد من المنتج قبل الدفع أو الاتفاق.",
        icon: ShieldCheck,
    },
    {
        label: "إظهار وسائل التواصل",
        enabled: true,
        description: "عرض طريقة التواصل المفضلة للبائع داخل صفحة المنتج.",
        icon: Eye,
    },
];

export const systemStatusItems = [
    {
        label: "Data Source",
        value: "Mock API",
        description: "البيانات قادمة من ملفات محلية وليس من Backend.",
        icon: Database,
    },
    {
        label: "Authentication",
        value: "Not implemented",
        description: "لا يوجد تسجيل دخول أو صلاحيات حقيقية بعد.",
        icon: Lock,
    },
    {
        label: "Settings Persistence",
        value: "Read-only UI",
        description: "الإعدادات لا يتم حفظها حاليًا بعد تحديث الصفحة.",
        icon: ToggleLeft,
    },
];
