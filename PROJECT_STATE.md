# تحديث PROJECT_STATE.md — Phase 11 Admin Dashboard Progress

## آخر حالة مؤكدة

تم الانتهاء من بناء أول مراحل Admin Dashboard بنجاح، والـ build الأخير كان ناجحًا بدون أخطاء.

آخر أمر build ناجح:

```bash
npm run build
```

النتيجة تضمنت routes التالية:

```txt
/
 /_not-found
/admin
/admin/analytics
/admin/products
/admin/settings
/favorites
/products
/products/[slug]
/products/create
```

هذا يؤكد أن Admin Shell والصفحات الإدارية الأساسية تم إنشاؤها وربطها بنجاح.

---

# Phase 11 — Admin Dashboard احترافي

## ما تم إنجازه

### Sprint 11.1 — Admin Dashboard Overview

تم إنشاء صفحة:

```txt
/admin
```

وفيها:

* Header إداري.
* إحصائيات عامة.
* Admin Stat Cards.
* Insights Section.
* Empty / Loading / Error states.
* اعتماد على `useProducts` و Mock API.
* لا يوجد Auth أو Backend حقيقي.

الملفات الأساسية:

```txt
src/app/admin/page.tsx
src/features/admin/components/admin-dashboard-view.tsx
src/features/admin/components/admin-stat-card.tsx
src/features/admin/components/admin-insights-section.tsx
src/features/admin/components/admin-empty-state.tsx
src/features/admin/utils/admin-stats.ts
```

---

### Sprint 11.2 — Admin Shell

تم بناء Admin Layout احترافي داخل `/admin` باستخدام Nested Layout.

تم إنشاء:

```txt
src/app/admin/layout.tsx
src/features/admin/components/admin-shell.tsx
src/features/admin/components/admin-sidebar.tsx
src/features/admin/components/admin-topbar.tsx
src/features/admin/config/admin-navigation.ts
```

الـ Admin Shell يحتوي:

* Sidebar على desktop.
* Mobile drawer باستخدام shadcn Sheet.
* Topbar إداري.
* روابط Admin داخلية:

  * `/admin`
  * `/admin/products`
  * `/admin/analytics`
  * `/admin/settings`
* CTA لإضافة منتج.
* رابط رجوع للسوق.
* Theme Toggle.
* Responsive layout.

ملاحظة هندسية:

* لم يتم فصل Public Layout عن Admin Layout بالكامل بعد.
* الـ Navbar العام ما زال موجودًا من Root Layout.
* فصل الـ Admin عن Public Layout باستخدام Route Groups ممكن يكون تحسين لاحق.

Commit المستخدم أو المقترح:

```bash
feat: add admin dashboard shell
```

---

### Sprint 11.3 — Admin Products Management

تم التخطيط لبناء صفحة إدارة المنتجات:

```txt
/admin/products
```

الهدف منها:

* Search.
* Filter by category.
* Filter by city.
* Filter by condition.
* Filter by featured.
* Sort.
* Active filters count.
* Clear filters.
* Empty filtered state.
* Loading/Error states.
* استخدام Mock API فقط.
* بدون delete أو edit حقيقي.

الملفات المخطط لها:

```txt
src/features/admin/products/components/admin-products-page-view.tsx
src/features/admin/products/components/admin-products-toolbar.tsx
src/features/admin/products/components/admin-products-table.tsx
src/features/admin/products/components/admin-products-empty-state.tsx
src/features/admin/products/utils/filter-admin-products.ts
src/features/admin/products/types/admin-products.types.ts
```

Commit مقترح:

```bash
feat: add admin products management page
```

---

### Sprint 11.4 — Enterprise Admin Products Table

تم التخطيط لتحويل جدول إدارة المنتجات إلى شكل أقرب لشغل الشركات.

الهدف:

* صورة المنتج داخل الجدول.
* اسم المنتج + الوصف + ID.
* بيانات البائع.
* المدينة والتصنيف والحالة.
* السعر.
* تاريخ النشر.
* Status badges.
* Actions dropdown واقعية.
* Mobile product cards بدل جدول مضغوط.
* فصل الجدول داخل `features/admin/products`.

تم اعتماد فكرة Admin Product Status بدون تعديل Product model الأساسي.

أنواع الحالة الإدارية:

```ts
export type AdminProductStatus =
    | "published"
    | "pending_review"
    | "needs_attention";
```

منطق الحالة:

* المنتج المنشور: ظاهر في السوق.
* pending_review: يحتاج مراجعة بيانات تواصل.
* needs_attention: إذا كانت حالة المنتج “يحتاج صيانة”.

الملفات المقترحة/المستخدمة:

```txt
src/features/admin/products/utils/admin-product-status.ts
src/features/admin/products/components/admin-products-table.tsx
```

Commit مقترح:

```bash
polish: enhance admin products enterprise table
```

---

# آخر طلب مطلوب تنفيذه الآن

## Sprint 11.5 — Admin Analytics Dashboard احترافي

المطلوب القادم هو بناء صفحة Analytics احترافية داخل:

```txt
/admin/analytics
```

لكن هذه المرة نريد استخدام مكتبة Charts حقيقية حتى يكون الشغل أقرب لبيئة الشركات، وكي أتعلم الطريقة الصحيحة لبناء داشبورد احترافي.

## القرار التقني

استخدام مكتبة:

```bash
recharts
```

سبب الاختيار:

* مناسبة مع React و Next.js.
* سهلة التعلم.
* منتشرة في Dashboards.
* مناسبة جدًا لمشروع Portfolio.
* تعمل بشكل ممتاز مع Client Components.
* تدعم ResponsiveContainer.
* يمكن دمجها مع shadcn/ui design system.

أمر التثبيت:

```bash
npm install recharts
```

---

# هدف Sprint 11.5

بناء Admin Analytics Dashboard تعرض:

## 1. Analytics Header

في صفحة:

```txt
/admin/analytics
```

يحتوي:

* Badge: التحليلات.
* Title: Analytics Dashboard أو تحليلات السوق.
* Description: توضيح أن البيانات من Mock API لكن البنية جاهزة لاحقًا للـ Backend.

## 2. Analytics Stats Cards

كروت عليا تعرض:

* عدد المنتجات.
* متوسط السعر.
* أعلى سعر.
* عدد التصنيفات المستخدمة.

مع استخدام:

```txt
AdminStatCard
```

الموجود مسبقًا.

## 3. Charts باستخدام Recharts

الرسوم المطلوبة:

### Category Distribution Chart

يعرض توزيع المنتجات حسب التصنيف.

### City Distribution Chart

يعرض المدن الأكثر نشاطًا.

### Price Range Chart

يعرض توزيع الأسعار حسب ranges مثل:

```txt
0 - 100
101 - 500
501 - 1000
1001 - 3000
+3000
```

### Featured Products Chart

Pie أو Donut chart لمقارنة:

```txt
منتجات مميزة
منتجات عادية
```

## 4. Top Products Lists

إضافة كروت:

* أغلى المنتجات.
* أحدث المنتجات.

كل عنصر يعرض:

* ترتيب.
* اسم المنتج.
* المدينة والتصنيف.
* السعر أو تاريخ النشر.
* رابط لصفحة المنتج.

## 5. States

يجب دعم:

* Loading skeleton.
* Error state مع زر إعادة المحاولة `refetch`.
* Empty state إذا لا توجد منتجات.
* Responsive layout ممتاز.

---

# الملفات المطلوبة في Sprint 11.5

يتم إنشاء:

```txt
src/features/admin/analytics/components/admin-analytics-view.tsx
src/features/admin/analytics/components/admin-chart-card.tsx
src/features/admin/analytics/components/category-distribution-chart.tsx
src/features/admin/analytics/components/city-distribution-chart.tsx
src/features/admin/analytics/components/price-range-chart.tsx
src/features/admin/analytics/components/featured-products-chart.tsx
src/features/admin/analytics/components/top-products-card.tsx
src/features/admin/analytics/utils/admin-analytics.ts
```

ويتم تعديل:

```txt
src/app/admin/analytics/page.tsx
```

---

# قواعد مهمة لـ Analytics

* استخدم `useProducts` لجلب المنتجات.
* لا تكسر React Query.
* لا تعدل Mock API إلا إذا كان ضروريًا جدًا.
* لا تضف Backend أو Auth.
* لا تستخدم ألوان hardcoded مثل `black`, `gray`, `red`.
* استخدم design tokens:

  * `bg-card`
  * `bg-background`
  * `text-foreground`
  * `text-muted-foreground`
  * `border-border`
  * `primary`
  * `muted`
  * `secondary`
  * `destructive`
* في Recharts استخدم CSS variables بحذر.
* بما أن المشروع يستخدم CSS variables بصيغة `--primary: hsl(...)`، الأفضل استخدام:

```ts
const chartColors = ["var(--primary)", "var(--muted-foreground)"];
```

وليس:

```ts
const chartColors = ["hsl(var(--primary))", "hsl(var(--muted-foreground))"];
```

لأن `--primary` يحتوي hsl كاملًا.

---

# Branch المطلوب

قبل البدء:

```bash
git status
npm run build
git checkout -b feature/admin-analytics
```

ثم:

```bash
npm install recharts
```

وبعدها:

```bash
npm run build
```

---

# Commit المقترح بعد الانتهاء

```bash
git add .
git commit -m "feat: add admin analytics dashboard"
```

---

# المرحلة التي بعدها

بعد نجاح Analytics، نقرر بين خيارين:

## خيار 1 — Admin Responsive QA

تحسين شامل للـ Admin Dashboard على المقاسات:

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

Commit مقترح:

```bash
polish: improve admin dashboard responsive experience
```

## خيار 2 — Admin Settings UI

بناء صفحة إعدادات إدارية واقعية، لكن بدون Backend حقيقي:

* Marketplace settings.
* Moderation preferences.
* Contact policy.
* Mock toggles.
* Read-only notice.

Commit مقترح:

```bash
feat: add admin settings interface
```

الأولوية المقترحة: تنفيذ Analytics أولًا، ثم Responsive QA كامل للـ Admin Dashboard.
