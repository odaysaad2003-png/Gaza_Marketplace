أنت تعمل كمساعد هندسي Senior Software Engineering Agent على مشروع قائم اسمه:

# Mini Marketplace Gaza

المشروع مبني بـ:

* Next.js App Router
* TypeScript
* Tailwind CSS
* shadcn/ui
* RTL Arabic UI
* Dark Mode
* TanStack Query / React Query
* Mock API فقط حاليًا
* Local Storage للمفضلة
* Feature-based architecture

المشروع ليس فارغًا. هناك كود وميزات كثيرة تم بناؤها بالفعل. المطلوب منك البناء على الموجود، وليس إعادة المشروع من الصفر.

---

# 1. فكرة المشروع

Mini Marketplace Gaza هو مشروع Marketplace عربي RTL تدريبي/احترافي لعرض منتجات بيع وشراء داخل غزة.

الهدف النهائي: مشروع Portfolio قوي قريب من الواقع، يساعدني أتعلم هندسة Frontend احترافية تمهيدًا لمشروع أكبر اسمه “سند”.

المشروع حاليًا Frontend فقط، بدون:

* Backend
* Database
* Authentication
* Payments
* Chat
* Donations
* Jobs
* Lost & Found

---

# 2. أسلوب العمل المطلوب منك

اشتغل معي كـ Senior Engineer + Mentor.

مهم جدًا:

* لا ترمي كود فقط.
* اشرح كل خطوة.
* اشرح لماذا نعمل كل ملف.
* اشرح المفاهيم الهندسية.
* لا تعيد بناء المشروع من الصفر.
* اعتمد على الملفات الموجودة.
* اشتغل Feature by Feature.
* كل Feature تكون على branch مستقل.
* أعطني branch name و commit message.
* بعد كل مرحلة اطلب مني:

  * `npm run build`
  * `git status`
* لو ظهر error، حلله بهدوء.
* الشرح يكون بالعربي.
* المشروع عربي RTL وموجه لغزة.
* حافظ على UI احترافي، ألوان هادئة، Dark/Light mode متناسق، Responsive ممتاز.

---

# 3. الحالة الحالية للمشروع

تم إنجاز المراحل التالية:

## Phase 1 — Project Setup

تم إنشاء مشروع Next.js + TypeScript + Tailwind + App Router.

المشروع موجود محليًا هنا تقريبًا:

```txt
C:\Users\AL\Desktop\next\mini-marketplace-gaza
```

والـ GitHub repo:

```txt
https://github.com/odaysaad2003-png/Gaza_Marketplace.git
```

---

## Phase 2 — shadcn/ui + Theme

تم تثبيت shadcn/ui واختيار Radix/Rhea.

تمت إضافة مكونات shadcn مثل:

```txt
button
card
input
badge
select
skeleton
separator
sheet
table
dropdown-menu
```

تم تثبيت:

```bash
npm install next-themes lucide-react
```

تم إنشاء:

```txt
src/components/theme/theme-provider.tsx
src/components/theme/theme-toggle.tsx
```

وتم إعداد:

* Arabic lang
* RTL dir
* Cairo font
* suppressHydrationWarning
* ThemeProvider

---

## Phase 3 — Base Layout

تم بناء layout أساسي:

```txt
src/components/layout/main-container.tsx
src/components/layout/site-logo.tsx
src/components/layout/navbar.tsx
src/components/layout/footer.tsx
src/lib/navigation.ts
```

الـ Navbar يحتوي روابط:

```txt
/
 /products
/products/create
/favorites
/admin
```

والـ layout يلف التطبيق بـ:

* Navbar
* main
* Footer

---

## Phase 4 — Product Types + Mock Data + Mock API

تم بناء Product domain داخل:

```txt
src/features/products
```

الملفات:

```txt
src/features/products/types/product.types.ts
src/features/products/constants/product-options.ts
src/features/products/data/products.mock-data.ts
src/features/products/api/products.mock-api.ts
src/lib/slug.ts
```

Product model تقريبًا:

```ts
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
```

CreateProductInput:

```ts
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
```

Categories:

```txt
إلكترونيات
موبايلات
أثاث
ملابس
أجهزة منزلية
سيارات ومواصلات
كتب وتعليم
أدوات ومعدات
أطفال
أخرى
```

Cities:

```txt
غزة
خانيونس
رفح
دير البلح
جباليا
بيت لاهيا
النصيرات
الشجاعية
الرمال
تل الهوا
```

Conditions:

```txt
جديد
مستعمل - ممتاز
مستعمل - جيد
يحتاج صيانة
```

Mock API يحتوي:

```ts
getProducts()
getFeaturedProducts()
getLatestProducts(limit)
getProductBySlug(slug)
createProduct(input)
```

ملاحظة مهمة عن الصور:

لو الصور داخل `public/products`، المسار داخل البيانات يجب أن يكون هكذا:

```txt
/products/samsung-galaxy-a52.webp
```

وليس:

```txt
../../../../public/products/...
```

---

## Phase 5 — React Query Integration

تم تثبيت TanStack Query:

```bash
npm install @tanstack/react-query
```

تم إنشاء:

```txt
src/components/providers/query-provider.tsx
src/features/products/api/products.query-keys.ts
src/features/products/hooks/use-products.ts
src/features/products/hooks/use-product.ts
src/features/products/hooks/use-create-product.ts
```

Query keys:

```ts
export const productQueryKeys = {
  all: ["products"] as const,
  lists: () => [...productQueryKeys.all, "list"] as const,
  featured: () => [...productQueryKeys.all, "featured"] as const,
  latest: (limit?: number) =>
    [...productQueryKeys.all, "latest", limit] as const,
  details: () => [...productQueryKeys.all, "detail"] as const,
  detail: (slug: string) =>
    [...productQueryKeys.details(), slug] as const,
};
```

---

## Phase 6 — Products Listing Page

تم إنشاء صفحة:

```txt
/products
```

وملفات تقريبية:

```txt
src/app/products/page.tsx
src/features/products/components/product-card.tsx
src/features/products/components/product-grid.tsx
src/features/products/components/product-filters.tsx
src/features/products/components/products-listing-view.tsx
src/lib/formatters.ts
```

الصفحة تدعم:

* عرض المنتجات
* Search
* Filter by category
* Filter by city
* Filter by condition
* min/max price
* sort latest / price asc / price desc
* loading skeleton
* empty state
* error state
* responsive grid

---

## Phase 7 — Product Details Page

تم إنشاء Dynamic Route:

```txt
/products/[slug]
```

وملفات:

```txt
src/app/products/[slug]/page.tsx
src/features/products/components/product-details-view.tsx
src/features/products/components/product-image-gallery.tsx
src/features/products/components/product-info-card.tsx
src/features/products/components/seller-contact-card.tsx
src/features/products/components/similar-products-section.tsx
```

الصفحة تحتوي:

* Gallery
* thumbnails
* product info
* price
* description
* meta info
* seller card
* favorite button placeholder لاحقًا تم ربطه
* similar products
* loading/error/not found states

ملاحظة: في Next.js 16 استخدمنا `params` كـ Promise في dynamic route:

```ts
type ProductDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};
```

ثم:

```ts
const { slug } = await params;
decodeURIComponent(slug)
```

---

## Shared Skeleton Work

تم اقتراح/إنشاء shared skeleton utility مثل:

```txt
src/components/shared/loading-skeleton.tsx
```

وقد يحتوي على:

```tsx
SkeletonList
SkeletonRepeater
```

لو ظهر error أن `SkeletonRepeater` غير موجود، أضفه إلى نفس الملف:

```tsx
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type SkeletonListProps = {
  count: number;
  className?: string;
  itemClassName?: string;
};

export function SkeletonList({
  count,
  className,
  itemClassName,
}: SkeletonListProps) {
  return (
    <div className={cn("grid gap-3", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} className={itemClassName} />
      ))}
    </div>
  );
}

type SkeletonRepeaterProps = {
  count: number;
  className?: string;
  children: (index: number) => React.ReactNode;
};

export function SkeletonRepeater({
  count,
  className,
  children,
}: SkeletonRepeaterProps) {
  return (
    <div className={cn("grid gap-3", className)}>
      {Array.from({ length: count }).map((_, index) => children(index))}
    </div>
  );
}
```

---

## Phase 8 — Create Product Page

تم إنشاء صفحة:

```txt
/products/create
```

باستخدام:

```bash
npm install react-hook-form zod @hookform/resolvers
```

ملفات:

```txt
src/app/products/create/page.tsx
src/features/products/schemas/create-product.schema.ts
src/features/products/components/create-product-form.tsx
```

الفورم يدعم:

* title
* description
* price
* category
* city
* condition
* imageUrl
* sellerName
* sellerPhone
* contactMethod

Validation عربي باستخدام Zod.

مشكلة مهمة تم حلها:

مع `z.coerce.number()` صار TypeScript error لأن input type يختلف عن output type.

الحل كان:

```ts
export type CreateProductFormInput = z.input<typeof createProductSchema>;
export type CreateProductFormValues = z.output<typeof createProductSchema>;
```

ثم في الفورم:

```ts
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
```

آخر build بعد Phase 8 نجح وكان يعرض routes:

```txt
/
 /products
/products/[slug]
/products/create
```

---

## Phase 9 — Favorites System

تم بناء أو جارٍ إنهاء:

```txt
src/features/favorites/hooks/use-favorites.tsx
src/features/favorites/components/favorite-button.tsx
src/features/favorites/components/favorites-view.tsx
src/app/favorites/page.tsx
```

مهم جدًا:

ملف `use-favorites` يجب أن يكون:

```txt
use-favorites.tsx
```

وليس `.ts` لأنه يحتوي JSX:

```tsx
<FavoritesContext.Provider value={value}>
```

Favorites system يعتمد على:

* localStorage
* FavoritesProvider
* useFavorites hook
* FavoriteButton
* /favorites page
* Empty state
* Hydration-safe state

يجب ربط `FavoritesProvider` داخل `src/app/layout.tsx` حول التطبيق:

```tsx
<QueryProvider>
  <FavoritesProvider>
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  </FavoritesProvider>
</QueryProvider>
```

ويجب استيراده:

```tsx
import { FavoritesProvider } from "@/features/favorites/hooks/use-favorites";
```

ملاحظة: إذا كان هناك import مثل:

```tsx
import { SkeletonRepeater } from "@/components/shared/loading-skeleton";
```

تأكد أن `loading-skeleton.tsx` يصدّر `SkeletonRepeater`.

---

# 4. آخر قرار مهم

قبل بناء Admin Dashboard، قررنا عمل مرحلة UI/UX Polish Sprint لأن الشغل وظيفيًا جيد، لكن نريد رفع المستوى البصري والاحترافي.

المرحلة القادمة ليست Admin مباشرة.

المرحلة القادمة:

# Phase 10 — UI/UX Polish Sprint

الهدف:

تحويل المشروع من Functional Marketplace إلى Polished Product Experience.

نريد:

* تحسين الألوان
* تحسين Light/Dark Mode
* تحسين Responsive
* Home Page احترافية
* UI قريب من الـ MVP preview الذي تخيلناه
* ألوان هادئة
* أنميشن خفيف
* Cards أجمل
* UX أفضل
* Empty/Loading/Error states أجمل

---

# 5. خطة Phase 10 بالتفصيل

## Sprint 10.1 — Design System Refinement

نبدأ بها أولًا.

نشتغل على:

```txt
src/app/globals.css
src/app/layout.tsx
src/components/layout/navbar.tsx
src/components/layout/footer.tsx
```

وقد نضيف:

```txt
src/components/shared/section-heading.tsx
src/components/shared/soft-gradient-background.tsx
```

الهدف:

* تحسين theme tokens
* تحسين light mode
* تحسين dark mode
* خلفية عامة ناعمة
* حدود وكروت متناسقة
* Navbar/Footer أجمل
* تجهيز shared components للصفحة الرئيسية

Branch:

```bash
git checkout -b polish/design-system
```

Commit:

```bash
git commit -m "polish: refine design system and global layout"
```

---

## Sprint 10.2 — Homepage Redesign

بعد تثبيت Design System.

ننشئ:

```txt
src/features/home/components/hero-section.tsx
src/features/home/components/featured-categories-section.tsx
src/features/home/components/how-it-works-section.tsx
src/features/home/components/home-cta-section.tsx
```

ونعدل:

```txt
src/app/page.tsx
```

Home should include:

* Hero Section
* Marketplace visual preview
* Featured categories
* Latest products
* How it works
* CTA bottom section

Branch:

```bash
git checkout -b polish/homepage-redesign
```

Commit:

```bash
git commit -m "polish: redesign homepage with marketplace sections"
```

---

## Sprint 10.3 — Product Cards Polish

نحسن:

```txt
product-card.tsx
product-grid.tsx
```

الأهداف:

* hover أفضل
* image overlay
* badge/favorite placement
* price hierarchy
* mobile card spacing
* radius/shadow متناسق

Branch:

```bash
git checkout -b polish/product-cards
```

Commit:

```bash
git commit -m "polish: improve product cards visual hierarchy"
```

---

## Sprint 10.4 — Product Details Polish

نحسن:

```txt
product-details-view.tsx
product-image-gallery.tsx
product-info-card.tsx
seller-contact-card.tsx
similar-products-section.tsx
```

الأهداف:

* Gallery أقوى
* CTA أوضح
* Seller card أفضل
* Similar products section أجمل
* Mobile layout ممتاز

Branch:

```bash
git checkout -b polish/product-details
```

Commit:

```bash
git commit -m "polish: enhance product details page layout"
```

---

## Sprint 10.5 — Create Product Form Polish

نحسن:

```txt
create-product-form.tsx
create-product.schema.ts
```

الأهداف:

* Form sections
* helper text
* image preview عند إدخال رابط الصورة
* better errors
* better loading state
* mobile spacing

Branch:

```bash
git checkout -b polish/create-product-form
```

Commit:

```bash
git commit -m "polish: improve create product form experience"
```

---

## Sprint 10.6 — Favorites Polish

نحسن:

```txt
favorite-button.tsx
favorites-view.tsx
```

الأهداف:

* Empty state أجمل
* favorite animation خفيف
* header card فيه عدد المفضلة
* clear favorites UX أفضل

Branch:

```bash
git checkout -b polish/favorites-experience
```

Commit:

```bash
git commit -m "polish: improve favorites empty state and interactions"
```

---

## Sprint 10.7 — Responsive QA Pass

نراجع المشروع على:

```txt
375px
640px
768px
1024px
1280px
1440px
```

نراجع:

* Navbar
* Footer
* Home
* Products
* Details
* Create Product
* Favorites

Branch:

```bash
git checkout -b polish/responsive-qa
```

Commit:

```bash
git commit -m "polish: improve responsive layouts across pages"
```

---

## Sprint 10.8 — Motion & Micro Interactions

نضيف animation خفيف بدون مبالغة.

نبدأ بـ Tailwind transitions فقط:

```txt
transition-all
duration-200
hover:-translate-y-1
hover:shadow-md
```

لاحقًا فقط إذا احتجنا، نفكر بمكتبة motion.

Branch:

```bash
git checkout -b polish/micro-interactions
```

Commit:

```bash
git commit -m "polish: add subtle micro interactions"
```

---

# 6. أولوية التنفيذ القادمة

ابدأ معي من:

# Sprint 10.1 — Design System Refinement

ولا تبدأ Admin Dashboard الآن.

قبل البدء اطلب مني:

```bash
git status
npm run build
```

لو Phase 9 لم يتم commit لها:

```bash
git add .
git commit -m "feat: add local storage favorites system"
git push -u origin feat/favorites-system
```

ثم نبدأ:

```bash
git checkout -b polish/design-system
```

بعدها نشتغل خطوة خطوة على:

* globals.css
* layout background
* navbar polish
* footer polish
* shared section heading
* soft gradient background

---

# 7. قواعد UI/UX التي اتفقنا عليها

Style direction:

```txt
Modern Arabic Marketplace
Soft Gaza-local identity
Premium but not flashy
Calm colors
Rounded cards
Clean spacing
Subtle gradients
Light animations
Professional portfolio-ready frontend
```

Light Mode:

```txt
خلفية فاتحة دافئة
كروت بيضاء ناعمة
Primary أخضر/زمردي هادئ
Borders خفيفة
Muted sections بلون رمادي دافئ
ظلال قليلة جدًا
```

Dark Mode:

```txt
خلفية داكنة ليست سوداء بالكامل
كروت داكنة مريحة
Primary واضح بدون إزعاج
Borders شفافة
Muted sections بتباين هادئ
```

مهم:

* لا تستخدم ألوان عشوائية بكثرة.
* اعتمد على design tokens.
* لا تكثر من `dark:bg-black`.
* استخدم:

  * `background`
  * `foreground`
  * `card`
  * `muted`
  * `primary`
  * `secondary`
  * `border`
  * `accent`

---

# 8. آخر طلب من المستخدم

المستخدم يريد الانتقال إلى شات جديد لأن هذا الشات أصبح كبيرًا ومضغوطًا.

أول مهمة في الشات الجديد:

* اقرأ هذا السياق.
* اسأل المستخدم أن يرسل:

  * `git status`
  * `npm run build`
* ثم أكمل من Sprint 10.1 — Design System Refinement.
