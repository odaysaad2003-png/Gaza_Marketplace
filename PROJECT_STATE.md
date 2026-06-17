# PROJECT_STATE.md — Mini Marketplace Gaza

أنت تعمل كمساعد هندسي Senior Software Engineering Agent على مشروع قائم اسمه:

# Mini Marketplace Gaza

المشروع مبني بـ:

* Next.js App Router
* TypeScript
* Tailwind CSS v4
* shadcn/ui
* RTL Arabic UI
* Dark Mode
* next-themes
* TanStack Query / React Query
* React Hook Form
* Zod
* Mock API فقط حاليًا
* Local Storage للمفضلة
* Feature-based architecture

المشروع ليس فارغًا. هناك كود وميزات كثيرة تم بناؤها بالفعل. المطلوب دائمًا البناء على الموجود، وليس إعادة المشروع من الصفر.

---

# 1. فكرة المشروع

Mini Marketplace Gaza هو مشروع Marketplace عربي RTL تدريبي/احترافي لعرض منتجات بيع وشراء داخل غزة.

الهدف النهائي: مشروع Portfolio قوي قريب من الواقع، يساعدني أتعلم هندسة Frontend احترافية تمهيدًا لمشروع أكبر اسمه “سند”.

المشروع حاليًا Frontend فقط، بدون:

* Backend
* Database
* Authentication حقيقي
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

```bash
npm run build
git status
```

* لو ظهر error، حلله بهدوء.
* الشرح يكون بالعربي.
* المشروع عربي RTL وموجه لغزة.
* حافظ على UI احترافي، ألوان هادئة، Dark/Light mode متناسق، Responsive ممتاز.
* لا تكسر المنطق الموجود، خصوصًا React Query و Favorites localStorage و form validation.
* لا تغيّر أسماء props أو state إلا بعد فحص الملفات.
* لا تبدأ بكتابة كود قبل فحص الملفات المطلوبة من المشروع.

---

# 3. معلومات المشروع

المشروع موجود محليًا تقريبًا هنا:

```txt
C:\Users\AL\Desktop\next\mini-marketplace-gaza
```

GitHub repo:

```txt
https://github.com/odaysaad2003-png/Gaza_Marketplace.git
```

---

# 4. التقنيات والمكتبات المستخدمة

تم استخدام:

```txt
Next.js 16.2.9
TypeScript
Tailwind CSS v4
shadcn/ui
next-themes
lucide-react
@tanstack/react-query
react-hook-form
zod
@hookform/resolvers
```

shadcn/ui components المستخدمة تقريبًا:

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

مهم: المشروع يستخدم Tailwind v4 مع:

```css
@theme inline {
  --color-background: var(--background);
}
```

لذلك ألوان CSS variables يجب أن تكون هكذا:

```css
--background: hsl(...);
```

وليس:

```css
--background: ... ... ...;
```

لأن `bg-background` لن يعمل صح بدون `hsl(...)`.

---

# 5. بنية المشروع العامة

المشروع يستخدم Feature-based architecture.

أهم المسارات:

```txt
src/app
src/components/layout
src/components/shared
src/components/theme
src/components/providers
src/features/products
src/features/favorites
src/features/home
src/lib
```

---

# 6. Layout + Theme

تم إعداد:

```txt
src/components/theme/theme-provider.tsx
src/components/theme/theme-toggle.tsx
src/components/providers/query-provider.tsx
```

داخل `src/app/layout.tsx` الترتيب العام يجب أن يبقى قريبًا من:

```tsx
<QueryProvider>
  <FavoritesProvider>
    <SoftGradientBackground>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </div>
    </SoftGradientBackground>
  </FavoritesProvider>
</QueryProvider>
```

مهم جدًا:

* الهيدر `fixed`.
* لذلك `main` يجب أن يحتوي `pt-16`.
* لا تغيّر ترتيب `QueryProvider` و `FavoritesProvider`.

---

# 7. Design System الحالي

تم تحسين `globals.css` لتكون الألوان قريبة من MVP visual reference.

## Light Mode

الاتجاه:

* خلفية فاتحة جدًا مائلة للأخضر/الأزرق الهادئ.
* كروت بيضاء.
* Primary زمردي/Teal داكن.
* Borders ناعمة.
* Text كحلي داكن ناعم.

القيم المستخدمة تقريبًا:

```css
:root {
  --background: hsl(160 25% 98%);
  --foreground: hsl(175 32% 9%);

  --card: hsl(0 0% 100%);
  --card-foreground: hsl(175 32% 9%);

  --popover: hsl(0 0% 100%);
  --popover-foreground: hsl(175 32% 9%);

  --primary: hsl(171 100% 21%);
  --primary-foreground: hsl(0 0% 100%);

  --secondary: hsl(170 28% 94%);
  --secondary-foreground: hsl(171 70% 18%);

  --muted: hsl(170 18% 95%);
  --muted-foreground: hsl(178 10% 40%);

  --accent: hsl(174 42% 91%);
  --accent-foreground: hsl(171 80% 18%);

  --destructive: hsl(0 84% 60%);
  --destructive-foreground: hsl(0 0% 98%);

  --border: hsl(168 18% 88%);
  --input: hsl(168 18% 88%);
  --ring: hsl(171 100% 26%);

  --radius: 1rem;
}
```

## Dark Mode

الاتجاه:

* كحلي/Teal داكن وليس أسود.
* Card داكن مريح.
* Primary واضح بدون إزعاج.
* Borders شفافة وهادئة.

```css
.dark {
  --background: hsl(195 68% 7%);
  --foreground: hsl(170 24% 94%);

  --card: hsl(194 47% 10%);
  --card-foreground: hsl(170 24% 94%);

  --popover: hsl(194 47% 10%);
  --popover-foreground: hsl(170 24% 94%);

  --primary: hsl(172 84% 34%);
  --primary-foreground: hsl(190 55% 8%);

  --secondary: hsl(193 38% 15%);
  --secondary-foreground: hsl(170 24% 92%);

  --muted: hsl(193 36% 13%);
  --muted-foreground: hsl(170 12% 68%);

  --accent: hsl(185 35% 16%);
  --accent-foreground: hsl(170 28% 92%);

  --destructive: hsl(0 72% 51%);
  --destructive-foreground: hsl(0 0% 98%);

  --border: hsl(192 34% 21%);
  --input: hsl(192 34% 21%);
  --ring: hsl(172 84% 38%);
}
```

---

# 8. Shared Components

تم إنشاء/استخدام:

```txt
src/components/shared/soft-gradient-background.tsx
src/components/shared/section-heading.tsx
src/components/shared/loading-skeleton.tsx
```

## SoftGradientBackground

يستخدم كـ global background abstraction، ويحتوي glow ناعم بـ `fixed inset-0`.

## SectionHeading

يستخدم لعناوين الأقسام، خاصة في Home و Similar Products.

## Loading Skeleton

يجب أن يحتوي على:

```tsx
SkeletonList
SkeletonRepeater
```

لو ظهر error أن `SkeletonRepeater` غير موجود، أضفه داخل `loading-skeleton.tsx`.

---

# 9. Navbar الحالي

تم تحسين `Navbar` ليكون:

* fixed في أعلى الصفحة.
* blur background.
* active link باستخدام `usePathname`.
* Desktop nav.
* Mobile burger menu باستخدام shadcn `Sheet`.
* CTA: أضف منتجك.
* Theme toggle.

الملف:

```txt
src/components/layout/navbar.tsx
```

مهم:

* الملف Client Component بسبب `usePathname` و mobile menu state.
* يستخدم `Sheet`, `SheetContent`, `SheetTrigger`, `SheetTitle`.
* القائمة تغلق تلقائيًا عند تغير `pathname`.

الـ header يجب أن يكون قريبًا من:

```tsx
<header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 shadow-sm shadow-black/[0.03] backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
```

---

# 10. Navigation

الملف:

```txt
src/lib/navigation.ts
```

الروابط الرئيسية حاليًا:

```ts
export const mainNavItems = [
  {
    href: "/",
    label: "الرئيسية",
  },
  {
    href: "/products",
    label: "المنتجات",
  },
  {
    href: "/favorites",
    label: "المفضلة",
  },
];
```

مهم:

* `/products/create` يفضل أن يبقى CTA button وليس nav item.
* لا تضف `/admin` إلى Navbar العام قبل بناء صفحة Admin Dashboard أو قبل القرار التصميمي.
* لاحقًا ممكن نضيف رابط Admin في قائمة منفصلة أو CTA صغير حسب الخطة.

---

# 11. Footer الحالي

تم تحسين Footer ليكون:

* border top.
* خلفية `bg-background/80`.
* معلومات عن المشروع.
* روابط سريعة.
* Local Gaza identity.
* portfolio note.

الملف:

```txt
src/components/layout/footer.tsx
```

---

# 12. Products Domain

المسار:

```txt
src/features/products
```

أهم الملفات:

```txt
src/features/products/types/product.types.ts
src/features/products/constants/product-options.ts
src/features/products/data/products.mock-data.ts
src/features/products/api/products.mock-api.ts
src/features/products/api/products.query-keys.ts
src/features/products/hooks/use-products.ts
src/features/products/hooks/use-product.ts
src/features/products/hooks/use-create-product.ts
src/lib/slug.ts
src/lib/formatters.ts
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

Mock API يحتوي:

```ts
getProducts()
getFeaturedProducts()
getLatestProducts(limit)
getProductBySlug(slug)
createProduct(input)
```

ملاحظة الصور:

لو الصور داخل `public/products`، المسار داخل البيانات يجب أن يكون:

```txt
/products/samsung-galaxy-a52.webp
```

وليس مسار نسبي إلى `public`.

---

# 13. React Query

تم تثبيت:

```bash
npm install @tanstack/react-query
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

لا تكسر React Query provider ولا query keys بدون سبب واضح.

---

# 14. Products Listing Page

المسار:

```txt
/products
```

أهم الملفات:

```txt
src/app/products/page.tsx
src/features/products/components/product-card.tsx
src/features/products/components/product-grid.tsx
src/features/products/components/product-filters.tsx
src/features/products/components/products-listing-view.tsx
```

الصفحة تدعم:

* عرض المنتجات.
* Search.
* Filter by category.
* Filter by city.
* Filter by condition.
* min/max price.
* sort latest / price asc / price desc.
* loading skeleton.
* empty state.
* error state.
* responsive grid.

تم تحسين Product Cards في Sprint 10.3:

* Card rounded.
* image overlay.
* favorite button فوق الصورة.
* badges.
* price hierarchy.
* hover خفيف.
* shadow ناعم.

تم تحسين Responsive Filters ضمن Sprint 10.7:

* على Desktop الفلاتر داخل card واضح.
* على Mobile:

  * البحث ظاهر مباشرة.
  * sort ظاهر مباشرة.
  * باقي الفلاتر داخل shadcn Sheet.
  * زر “فلترة”.
  * عداد للفلاتر النشطة.
  * زر “مسح الفلاتر”.
  * زر “عرض النتائج”.
* تم الحفاظ على نفس `ProductFiltersState` ونفس props.
* لم يتم كسر منطق الفلترة والفرز داخل `ProductsListingView`.

Commit المقترح/المستخدم:

```bash
polish: improve responsive product filters
```

---

# 15. Product Details Page

المسار:

```txt
/products/[slug]
```

مهم في Next.js 16:

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

أهم الملفات:

```txt
src/features/products/components/product-details-view.tsx
src/features/products/components/product-image-gallery.tsx
src/features/products/components/product-info-card.tsx
src/features/products/components/seller-contact-card.tsx
src/features/products/components/similar-products-section.tsx
```

تم تحسينها في Sprint 10.4:

* Gallery polish.
* Favorite button فوق الصورة.
* Badges فوق الصورة.
* Product info card أقوى.
* السعر prominent.
* Seller card فيه WhatsApp و phone CTA.
* Similar products تستخدم SectionHeading.
* right column sticky على الشاشات الكبيرة.

تم تحسين Responsive QA لها ضمن Sprint 10.8:

* تقليل spacing على الموبايل.
* تحسين skeleton.
* جعل thumbnails تعمل horizontal scroll على الموبايل بدل الانضغاط.
* تحسين title/price على 375px.
* إصلاح كلاس غير مضمون `h-13 w-13` إلى `h-12 w-12`.
* تحسين seller card والأزرار.
* الحفاظ على sticky column فقط على desktop.

Commit المقترح/المستخدم:

```bash
polish: improve product details responsive layout
```

---

# 16. Create Product Page

المسار:

```txt
/products/create
```

المكتبات:

```bash
npm install react-hook-form zod @hookform/resolvers
```

أهم الملفات:

```txt
src/app/products/create/page.tsx
src/features/products/schemas/create-product.schema.ts
src/features/products/components/create-product-form.tsx
```

تم تحسينها في Sprint 10.5:

* Header card.
* Form sections.
* Helper text.
* Image preview.
* Side helper card.
* Loading submit state.
* Better submit/cancel UX.
* Responsive grid.

مهم جدًا بخصوص Zod:

مع `z.coerce.number()` يجب الحفاظ على:

```ts
export type CreateProductFormInput = z.input<typeof createProductSchema>;
export type CreateProductFormValues = z.output<typeof createProductSchema>;
```

وفي الفورم:

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

تم إصلاح خطأ TypeScript في `ImagePreview`:

الخطأ كان:

```txt
Type 'string | undefined' is not assignable to type 'string | StaticImport'
```

الحل المعتمد:

```ts
const previewUrl = imageUrl?.trim() ?? "";
```

ثم تمرير:

```tsx
<Image src={previewUrl} ... />
```

تم أيضًا استخدام:

```tsx
unoptimized
```

في صورة المعاينة، لأن المستخدم قد يضع رابط `https://...` خارجي، وبدونه قد يطلب Next.js إعداد `remotePatterns` داخل `next.config.ts`.

تم تحسين Responsive QA لها ضمن Sprint 10.8:

* تقليل padding على الموبايل.
* جعل form card وsections أكثر راحة.
* الأزرار full width على الموبايل.
* image preview ينزل تحت input على الشاشات الصغيرة.
* side helper card ينزل تحت الفورم على الموبايل.
* الحفاظ على react-hook-form و zod types.

Commit المقترح/المستخدم:

```bash
polish: improve create product responsive form
```

---

# 17. Favorites System

أهم الملفات:

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

النظام يعتمد على:

* localStorage.
* FavoritesProvider.
* useFavorites hook.
* FavoriteButton.
* /favorites page.
* Empty state.
* Hydration-safe state.

يجب أن يكون `FavoritesProvider` داخل layout حول التطبيق.

تم تحسين Favorites في Sprint 10.6:

* Favorite button polish.
* Favorites header.
* Counter.
* Empty state.
* Clear favorites action.

تم تحسين Responsive QA لها ضمن Sprint 10.8:

* تقليل padding على الموبايل.
* تحسين header والempty state.
* الأزرار full width على الموبايل.
* تحسين skeleton.
* لم يتم لمس `use-favorites.tsx` لأنه صحيح وHydration-safe.
* لم يتم لمس `favorite-button.tsx` لأنه يدعم `aria-pressed` ويمنع propagation داخل ProductCard.

Commit المقترح/المستخدم:

```bash
polish: improve favorites responsive experience
```

---

# 18. Home Page

تم بناء/تحسين الصفحة الرئيسية ضمن Sprint 10.2.

المسارات:

```txt
src/features/home/components/hero-section.tsx
src/features/home/components/featured-categories-section.tsx
src/features/home/components/how-it-works-section.tsx
src/features/home/components/home-cta-section.tsx
src/app/page.tsx
```

الصفحة تحتوي:

* Hero Section.
* Marketplace visual preview.
* Featured categories.
* Latest products.
* How it works.
* CTA bottom section.

الهوية البصرية مستوحاة من MVP reference:

* أبيض ناعم.
* Teal/Emerald primary.
* كروت rounded.
* shadow خفيف.
* modern Arabic marketplace.

تم تحسين Responsive QA لها ضمن Sprint 10.8:

* تقليل حجم Hero title على 375px.
* جعل hero buttons full width على الموبايل.
* تحسين trust points.
* منع كرت أحدث المنتجات من كسر السعر أو النص.
* تحسين category cards.
* تحسين How It Works cards.
* تحسين CTA final section.

Commit المقترح/المستخدم:

```bash
polish: improve homepage responsive layout
```

---

# 19. Phase 10 — UI/UX Polish Sprint Progress

## تم إنجاز:

### Sprint 10.1 — Design System Refinement

Branch:

```bash
polish/design-system
```

Commit message:

```bash
polish: refine design system and global layout
```

تم فيه:

* تحسين global colors.
* إصلاح Tailwind v4 colors باستخدام `hsl(...)`.
* SoftGradientBackground.
* SectionHeading.
* Navbar polish.
* Footer polish.
* Fixed header.
* `main pt-16`.

---

### Sprint 10.2 — Homepage Redesign

Branch:

```bash
polish/homepage-redesign
```

Commit message:

```bash
polish: redesign homepage with marketplace sections
```

تم فيه:

* Hero section.
* Featured categories.
* Latest products.
* How it works.
* Home CTA.

---

### Sprint 10.3 — Product Cards Polish

Branch:

```bash
polish/product-cards
```

Commit message:

```bash
polish: improve product cards visual hierarchy
```

تم فيه:

* Cards أجمل.
* Image overlay.
* Favorite placement.
* Price hierarchy.
* Badges.
* Hover micro-interactions.

---

### Sprint 10.4 — Product Details Polish

Branch:

```bash
polish/product-details
```

Commit message:

```bash
polish: enhance product details page layout
```

تم فيه:

* Gallery polish.
* Info card polish.
* Seller card polish.
* Similar products polish.
* Sticky details column.

---

### Sprint 10.5 — Create Product Form Polish

Branch:

```bash
polish/create-product-form
```

Commit message:

```bash
polish: improve create product form experience
```

تم فيه:

* Header card.
* Form sections.
* Helper text.
* Image preview.
* Side tips.
* Loading submit state.

---

### Sprint 10.6 — Favorites Polish

Branch:

```bash
polish/favorites-experience
```

Commit message:

```bash
polish: improve favorites empty state and interactions
```

تم فيه:

* Favorite button polish.
* Favorites header.
* Counter.
* Empty state.
* Clear favorites action.

---

### Sprint 10.7 — Responsive QA: Navigation + Product Filters

Branch:

```bash
polish/responsive-qa
```

أو:

```bash
polish/responsive-product-filters
```

تم فيه:

* Mobile burger menu في Navbar باستخدام shadcn Sheet.
* Active links في mobile menu.
* CTA داخل mobile menu.
* القائمة تغلق تلقائيًا عند تغيير المسار.
* Desktop nav لم يتكسر.
* fixed header مع `main pt-16`.
* Responsive product filters في `/products`.
* Mobile Sheet للفلاتر.
* عداد للفلاتر النشطة.
* زر مسح الفلاتر.
* Search و Sort بقوا سهلين الوصول على الموبايل.

Commit messages:

```bash
polish: add responsive mobile navigation
polish: improve responsive product filters
```

---

### Sprint 10.8 — Final Responsive QA

Branch:

```bash
polish/final-responsive-qa
```

تم فيه:

* تحسين Home responsive layout.
* تحسين Product Details responsive layout.
* تحسين Create Product responsive form.
* تحسين Favorites responsive experience.
* إصلاح TypeScript في ImagePreview.
* فحص المقاسات:

```txt
375px
390px
430px
640px
768px
1024px
1280px
1440px
```

Commit messages المقترحة/المستخدمة:

```bash
polish: improve homepage responsive layout
polish: improve product details responsive layout
polish: improve create product responsive form
polish: improve favorites responsive experience
fix: make product image preview src type-safe
```

يمكن أن يكون fix الخاص بـ ImagePreview داخل commit صفحة Create Product أو commit مستقل.

---

# 20. آخر حالة Build معروفة

آخر build بعد Responsive QA كان ناجحًا حسب المستخدم.

دائمًا في الشات الجديد يجب البدء بـ:

```bash
git status
npm run build
```

قبل أي تعديل جديد.

Routes الحالية تقريبًا:

```txt
/
 /favorites
/products
/products/[slug]
/products/create
/_not-found
```

---

# 21. آخر طلب يجب تنفيذه في الشات الجديد

المهمة الجديدة المطلوبة الآن:

# Phase 11 — Admin Dashboard احترافي

المطلوب البدء ببناء Admin Dashboard احترافي كميزة جديدة، لكن على مراحل وبدون كسر المشروع الحالي.

## الهدف

إضافة Admin Dashboard تدريبية/Portfolio داخل المشروع تعرض نظرة إدارية على المنتجات الحالية من الـ Mock API.

هذه ليست لوحة تحكم Backend حقيقية ولا فيها Authentication حقيقي الآن. الهدف Portfolio Frontend فقط.

## المطلوب مبدئيًا

ابدأ بتحليل وبناء خطة Admin Dashboard احترافية قبل كتابة الكود.

لا تكتب كود مباشرة قبل فحص الملفات الحالية.

## أول خطوة في الشات الجديد

ابدأ بهذه الرسالة:

```txt
اقرأ PROJECT_STATE.md هذا، واشتغل معي كسينيور سوفتوير انجينير على نفس مشروع Mini Marketplace Gaza بدون إعادة من الصفر. آخر حالة build كانت ناجحة بعد Sprint 10.8 Final Responsive QA. الآن نريد البدء بـ Phase 11 — Admin Dashboard احترافي. قبل كتابة أي كود اطلب مني git status و npm run build، ثم اطلب الملفات التي تحتاج فحصها لبناء Admin Dashboard بدون كسر المشروع.
```

## قبل البدء اطلب مني تنفيذ:

```bash
git status
npm run build
```

ثم اطلب مني إرسال الملفات التالية على الأقل:

```txt
src/app/layout.tsx
src/lib/navigation.ts
src/components/layout/navbar.tsx
src/features/products/api/products.mock-api.ts
src/features/products/hooks/use-products.ts
src/features/products/types/product.types.ts
src/features/products/components/product-card.tsx
src/components/ui/table.tsx
src/components/ui/dropdown-menu.tsx
```

وقد نحتاج أيضًا:

```txt
src/components/layout/main-container.tsx
src/components/shared/section-heading.tsx
src/lib/formatters.ts
src/features/products/constants/product-options.ts
```

---

# 22. Admin Dashboard — الخطة المقترحة

## Branch المقترح

```bash
git checkout -b feature/admin-dashboard
```

## Commit message النهائي المقترح لأول نسخة

```bash
git commit -m "feat: add admin dashboard overview"
```

---

# 23. نطاق Admin Dashboard الأول

## المسار المقترح

```txt
/admin
```

## ملفات محتملة

```txt
src/app/admin/page.tsx
src/features/admin/components/admin-dashboard-view.tsx
src/features/admin/components/admin-stat-card.tsx
src/features/admin/components/admin-products-table.tsx
src/features/admin/components/admin-empty-state.tsx
src/features/admin/utils/admin-stats.ts
```

أو إذا أردنا تقليل الملفات بالبداية:

```txt
src/app/admin/page.tsx
src/features/admin/components/admin-dashboard-view.tsx
```

ثم نفصل لاحقًا.

## لا نبدأ Auth الآن

لا نضيف:

* Login
* Middleware auth
* NextAuth
* Roles حقيقية
* Backend permissions

ممكن فقط نضيف ملاحظة UI:

```txt
لوحة تحكم تدريبية — لا يوجد تسجيل دخول حقيقي بعد
```

---

# 24. مكونات Admin Dashboard المقترحة

أول نسخة احترافية يجب أن تحتوي:

## 1. Header Section

* Badge: لوحة الإدارة
* Title: إدارة السوق
* Description: نظرة سريعة على المنتجات والتصنيفات والمدن داخل Mini Marketplace Gaza
* CTA صغير إلى `/products/create`
* CTA إلى `/products`

## 2. Stats Cards

إحصائيات من المنتجات الحالية:

* إجمالي المنتجات
* المنتجات المميزة
* عدد المدن الموجودة
* متوسط السعر أو أعلى سعر
* عدد التصنيفات المستخدمة

## 3. Products Management Table

جدول إداري يعرض:

* المنتج
* التصنيف
* المدينة
* الحالة
* السعر
* تاريخ النشر
* مميز أم لا
* actions dropdown

Actions مبدئية بدون backend:

* عرض المنتج
* تعديل لاحقًا — disabled أو label “قريبًا”
* حذف لاحقًا — disabled أو label “قريبًا”

لا تنفذ delete حقيقي الآن إلا إذا قررنا لاحقًا.

## 4. Insights Section

كروت أو قائمة تعرض:

* أكثر تصنيف يحتوي منتجات
* أكثر مدينة تحتوي منتجات
* أغلى منتج
* أحدث منتج

## 5. Responsive

يجب أن يكون ممتاز على:

```txt
375px
390px
430px
640px
768px
1024px
1280px
1440px
```

على الموبايل:

* يمكن تحويل الجدول إلى cards أو horizontal scroll.
* لا تكسر layout.
* حافظ على RTL.
* الأزرار full width عند الحاجة.

## 6. Design Tokens

استخدم فقط:

```txt
bg-card
bg-background
text-foreground
text-muted-foreground
border-border
primary
secondary
muted
destructive
```

لا تستخدم:

```txt
bg-black
text-gray-900
dark:bg-black
```

---

# 25. Admin Dashboard — قواعد هندسية مهمة

* لا تكسر React Query.
* لا تغيّر products mock api إلا إذا احتجنا method آمن.
* لا تضف admin إلى navbar قبل بناء صفحة `/admin`.
* بعد بناء `/admin` ممكن نضيف link في navigation أو CTA حسب القرار.
* لا نضيف Backend أو Auth الآن.
* لا نضيف مكتبات جديدة إلا عند الحاجة.
* استخدم shadcn `Table` لو موجود.
* استخدم `DropdownMenu` لو موجود.
* استخدم `lucide-react` للأيقونات.
* استخدم `formatPrice` و `formatDate`.
* استخدم `useProducts` داخل Client Component للـ dashboard.
* `src/app/admin/page.tsx` يمكن أن يكون Server Component يستدعي Client View.

---

# 26. صيغة العمل في الشات الجديد

بعد قراءة الملف، الشات الجديد يجب أن يقول للمستخدم:

1. نفّذ:

```bash
git status
npm run build
```

2. إذا كل شيء نظيف، افتح branch:

```bash
git checkout -b feature/admin-dashboard
```

3. أرسل الملفات المطلوبة للفحص:

```txt
src/app/layout.tsx
src/lib/navigation.ts
src/components/layout/navbar.tsx
src/features/products/api/products.mock-api.ts
src/features/products/hooks/use-products.ts
src/features/products/types/product.types.ts
src/components/ui/table.tsx
src/components/ui/dropdown-menu.tsx
src/lib/formatters.ts
```

4. بعد فحص الملفات، يبدأ التنفيذ خطوة خطوة.

---

# 27. ملاحظات نهائية

* المشروع الآن في مرحلة UI/UX قوية ومستقرة.
* Phase 10 انتهت تقريبًا.
* Phase 11 تبدأ بلوحة الإدارة.
* Admin Dashboard يجب أن تكون Portfolio feature احترافية، لكن صادقة: Frontend/Mock فقط.
* لا نعمل Admin Dashboard كأنها نظام حقيقي فيه صلاحيات قبل وجود Auth/Backend.
* الهدف من Admin Dashboard: إظهار قدرة على بناء واجهات إدارية، جداول، إحصائيات، responsive layout، وتنظيم feature-based architecture.
