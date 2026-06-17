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
* لا تكسر المنطق الموجود، خصوصًا React Query و Favorites localStorage و form validation.

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

داخل `src/app/layout.tsx` يجب أن يكون الترتيب العام قريبًا من:

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

* الهيدر صار `fixed`.
* لذلك `main` يجب أن يحتوي `pt-16`.
* لا تغيّر ترتيب `QueryProvider` و `FavoritesProvider`.

---

# 7. Design System الحالي

تم تحسين `globals.css` لتكون الألوان قريبة من MVP visual reference:

## Light Mode

اتجاه الألوان:

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

الأفضل حاليًا أن تكون الروابط الرئيسية فقط:

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
* لا تضف `/admin` الآن إذا الصفحة غير مبنية حتى لا نرسل المستخدم إلى 404.

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

* Gallery أقوى.
* Favorite button فوق الصورة.
* Badges فوق الصورة.
* Product info card أقوى.
* السعر prominent.
* Seller card فيه WhatsApp و phone CTA.
* Similar products تستخدم SectionHeading.
* right column sticky على الشاشات الكبيرة.

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
* Loading state.
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

* Favorite button animation.
* Active heart state.
* Header card في صفحة المفضلة.
* Counter.
* Empty state أجمل.
* Clear favorites UX.
* لا تغيّر منطق `use-favorites.tsx` لأنه شغال وصحيح.

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

### Sprint 10.7 — Responsive QA Pass

بدأنا فيه.

Branch:

```bash
polish/responsive-qa
```

تم تنفيذ أهم جزء أولي:

* Mobile burger menu في Navbar باستخدام shadcn Sheet.
* Active links في mobile menu.
* CTA داخل mobile menu.
* القائمة تغلق تلقائيًا عند تغيير المسار.
* Desktop nav لم يتكسر.
* fixed header مع `main pt-16`.

Commit المقترح لهذا الجزء:

```bash
git commit -m "polish: add responsive mobile navigation"
```

---

# 20. آخر حالة Build معروفة

آخر build قبل الانتقال كان ناجحًا أكثر من مرة:

```bash
npm run build
```

وكانت routes:

```txt
/
 /favorites
/products
/products/[slug]
/products/create
/_not-found
```

لكن في الشات الجديد يجب دائمًا أن تبدأ بـ:

```bash
git status
npm run build
```

قبل أي تعديل جديد.

---

# 21. آخر طلب يجب تنفيذه في الشات الجديد

أول مهمة تنفيذية في الشات الجديد هي إكمال Sprint 10.7:

# تحسين Responsive Filters في صفحة المنتجات بشكل احترافي

المطلوب تحديدًا:

* تحسين `product-filters.tsx`.
* تحسين responsive behavior في صفحة `/products`.
* لا تكسر منطق الفلاتر الحالي.
* لا تغيّر أسماء props أو state إلا بعد فحص الملفات.
* على desktop يمكن أن تبقى الفلاتر كـ panel/card واضح.
* على mobile يجب تحويل الفلاتر إلى زر واضح يفتح Sheet أو Drawer.
* استخدام shadcn `Sheet` لأن المشروع مثبت فيه `sheet`.
* زر مثل: "فلترة المنتجات".
* إظهار عدد الفلاتر النشطة إن أمكن.
* إضافة زر "مسح الفلاتر" داخل الموبايل والديكستوب.
* Search field يجب أن يبقى سهل الوصول.
* Sort يجب أن يكون واضح.
* تجربة 375px / 390px / 430px / 640px / 768px / 1024px.
* الحفاظ على RTL.
* الحفاظ على Design Tokens:

  * `bg-card`
  * `bg-background`
  * `text-foreground`
  * `text-muted-foreground`
  * `border-border`
  * `primary`
  * `secondary`
* لا تستخدم ألوان مباشرة مثل:

  * `bg-black`
  * `text-gray-900`
  * `dark:bg-black`

## الملفات المحتمل تعديلها:

```txt
src/features/products/components/product-filters.tsx
src/features/products/components/products-listing-view.tsx
src/app/products/page.tsx
```

قد نضيف component اختياري:

```txt
src/features/products/components/mobile-product-filters.tsx
```

أو نضعه داخل نفس `product-filters.tsx` إذا كان أبسط.

## قبل البدء يجب أن تطلب مني إرسال محتوى هذه الملفات:

```txt
src/features/products/components/product-filters.tsx
src/features/products/components/products-listing-view.tsx
src/app/products/page.tsx
```

ثم بعد فحصها أعطني تعديل آمن.

## Branch المطلوب:

```bash
git checkout -b polish/responsive-product-filters
```

أو إذا كنا ما زلنا داخل `polish/responsive-qa` نكمل عليه حسب حالة git.

## Commit message المقترح:

```bash
git commit -m "polish: improve responsive product filters"
```

## بعد التنفيذ:

اطلب مني:

```bash
npm run build
git status
```

ثم نراجع responsive يدويًا على:

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

---

# 22. طريقة بدء الشات الجديد

ابدأ الشات الجديد بهذه الرسالة:

```txt
اقرأ PROJECT_STATE.md هذا، واشتغل معي كسينيور سوفتوير انجينير على نفس المشروع بدون إعادة من الصفر. آخر مهمة مطلوبة الآن هي Sprint 10.7 — تحسين Responsive Filters في صفحة المنتجات بشكل احترافي. قبل ما تكتب أي كود اطلب مني git status و npm run build، ثم اطلب ملفات product-filters.tsx و products-listing-view.tsx و app/products/page.tsx عشان تعدل بدون كسر المنطق.
```

---

# 23. قواعد مهمة للشات الجديد

* لا تبدأ Admin Dashboard الآن.
* لا تعيد بناء المشروع من الصفر.
* لا تغيّر المنطق الموجود إذا المطلوب UI polish فقط.
* لا تكسر React Query.
* لا تكسر FavoritesProvider.
* لا تكسر Zod form types.
* لا تخلط branches.
* بعد كل Sprint:

  * build
  * git status
  * commit
* أي error يتم تحليله بهدوء.
* الشرح دائمًا بالعربي.
