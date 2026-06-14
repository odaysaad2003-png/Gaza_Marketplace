# PROJECT_STATE.md

# Mini Marketplace Gaza — Project State

## 1. Project Overview

Mini Marketplace Gaza is an Arabic RTL frontend marketplace built with Next.js and TypeScript.

The project is a training-but-realistic marketplace experience focused on Gaza local product listings. It allows users to browse products, view product details, add products through a mock flow, save favorites locally, and eventually view a mini admin dashboard.

The project is intentionally frontend-only at this stage. There is no real backend, database, authentication, payment, chat, donations, jobs, or missing-items module.

The current engineering goal is to build a portfolio-ready frontend application with clean architecture, realistic UI, reusable components, mock data, and scalable feature-based organization.

---

## 2. Current Architecture

### Framework

* Next.js App Router
* TypeScript
* Tailwind CSS v4
* shadcn/ui
* Radix-based shadcn components
* Dark mode support using `next-themes`
* Arabic RTL layout
* Feature-based architecture

---

### Current High-Level Structure

Current project structure is expected to be close to:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    layout/
      main-container.tsx
      site-logo.tsx
      navbar.tsx
      footer.tsx

    providers/
      query-provider.tsx

    theme/
      theme-provider.tsx
      theme-toggle.tsx

    ui/
      button.tsx
      card.tsx
      input.tsx
      badge.tsx
      select.tsx
      skeleton.tsx
      separator.tsx
      sheet.tsx
      table.tsx
      dropdown-menu.tsx

  features/
    products/
      api/
        products.mock-api.ts
        products.query-keys.ts

      constants/
        product-options.ts

      data/
        products.mock-data.ts

      hooks/
        use-products.ts
        use-product.ts

      types/
        product.types.ts

  lib/
    navigation.ts
    slug.ts
    utils.ts
```

Some files may differ slightly depending on the latest local changes, but this is the intended architecture based on current development.

---

### Routing

Current active routing:

```txt
/
```

Planned routes:

```txt
/products
/products/[slug]
/products/create
/favorites
/admin
```

The current `src/app/layout.tsx` is responsible for global layout concerns such as:

* Arabic language setup
* RTL direction
* Cairo font
* Theme provider
* Query provider
* Navbar
* Footer
* Main application shell

---

### Data Flow

Current intended data flow:

```txt
UI Component
  -> Custom React Query Hook
    -> Mock API Function
      -> Mock Products Data
```

Example:

```txt
HomePage
  -> useLatestProducts()
    -> getLatestProducts()
      -> mockProducts
```

This keeps UI separated from business/data logic and makes it easier to replace the mock API later with a real backend API.

---

## 3. Completed Features

### Completed / Mostly Completed

#### Project Setup

* Next.js project initialized.
* TypeScript enabled.
* Tailwind CSS enabled.
* App Router enabled.
* Build passes successfully.
* GitHub repository connected.
* Branch-based workflow started.

#### UI Foundation

* shadcn/ui initialized.
* Radix component library selected.
* Rhea preset selected.
* Core UI components added.
* `cn` utility available through `src/lib/utils.ts`.

#### RTL and Theme Support

* Arabic RTL direction configured through root HTML.
* Arabic metadata added.
* Cairo font configured.
* Dark mode support added using `next-themes`.
* Theme toggle component created.
* Light / Dark / System theme switching supported.

#### Base Layout

* Main container component created.
* Site logo component created.
* Navbar component created.
* Footer component created.
* Global layout wraps all pages with Navbar, main content, and Footer.
* Navigation items centralized in `src/lib/navigation.ts`.

#### Mock Products Domain

* Product TypeScript types created.
* Product categories created.
* Gaza cities created.
* Product conditions created.
* Realistic mock product data created.
* Mock API layer created with:

  * `getProducts`
  * `getFeaturedProducts`
  * `getLatestProducts`
  * `getProductBySlug`
  * `createProduct`

#### React Query Foundation

* TanStack Query installed or planned in current phase.
* Query provider added or planned.
* Product query keys added or planned.
* Product hooks added or planned:

  * `useProducts`
  * `useFeaturedProducts`
  * `useLatestProducts`
  * `useProduct`

---

## 4. In Progress Features

### React Query Integration

Status: In progress or next immediate step.

Purpose:

* Connect mock API to the UI using TanStack Query.
* Avoid manual `useEffect` data fetching.
* Prepare for loading, error, success, cache, and invalidation states.

Expected files:

```txt
src/components/providers/query-provider.tsx
src/features/products/api/products.query-keys.ts
src/features/products/hooks/use-products.ts
src/features/products/hooks/use-product.ts
```

---

### Home Page Preview

Status: Partial / temporary.

Current home page is being used as a test surface for:

* Layout
* RTL
* shadcn components
* Dark mode
* Mock API data
* React Query integration

The final Home Page still needs a complete production-style implementation.

---

## 5. Data Models

### Product

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

### CreateProductInput

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

### ProductCategory

```ts
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
```

### GazaCity

```ts
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
```

### ProductCondition

```ts
export type ProductCondition =
  | "جديد"
  | "مستعمل - ممتاز"
  | "مستعمل - جيد"
  | "يحتاج صيانة";
```

---

## 6. Technical Decisions

### Next.js App Router

The project uses the App Router because it is the modern routing architecture in Next.js and supports:

* Layouts
* Nested routing
* Dynamic routes
* Server Components
* Client Components
* Route-level organization

---

### TypeScript

TypeScript is used to make the product domain safer and clearer.

Benefits:

* Strong product model.
* Safer mock API.
* Better autocomplete.
* Easier refactoring.
* Fewer runtime mistakes

---

### Feature-Based Architecture

Products are organized under:

```txt
src/features/products
```

This keeps all product-related logic together:

* API functions
* hooks
* types
* constants
* data
* future components

This is preferred over dumping everything into global `components`, `hooks`, or `utils` folders.

---

### Mock API First

The project currently uses a mock API instead of a real backend.

Reason:

* Keeps the project frontend-focused.
* Allows realistic data fetching architecture.
* Makes React Query integration meaningful.
* Makes future backend replacement easier.

Current mock API can later be replaced with real HTTP requests while keeping the same public function names.

---

### React Query / TanStack Query

TanStack Query is used or planned for managing server-like state.

Main responsibilities:

* Data fetching
* Caching
* Loading states
* Error states
* Refetching
* Mutations
* Query invalidation

This is preferred over raw `useEffect` for product data.

---

### RTL Support

The project is Arabic-first and uses real RTL support.

Root layout should include:

```tsx
<html lang="ar" dir="rtl" suppressHydrationWarning>
```

This ensures the page direction is semantically correct, not just visually adjusted.

---

### Dark Mode

Dark mode is part of the MVP and uses:

* `next-themes`
* shadcn theme tokens
* Tailwind theme variables

The project should avoid hardcoded color-heavy styling such as excessive `dark:bg-black` usage and instead prefer semantic tokens:

```txt
background
foreground
card
primary
muted
border
accent
destructive
```

---

### shadcn/ui

shadcn/ui is used as the base UI system.

Decision:

* Use shadcn components for common UI primitives.
* Customize the design on top of them.
* Avoid treating shadcn as a black box.
* Keep components consistent with Arabic RTL and dark mode.

---

## 7. Known Gaps / Missing Features

### Pages Not Yet Fully Built

The following pages still need implementation:

```txt
/products
/products/[slug]
/products/create
/favorites
/admin
```

---

### Product Listing Missing

Needs:

* Product grid
* Search
* Filters
* Sort
* Loading state
* Empty state
* Error state
* Responsive layout
* Mobile filter sheet

---

### Product Details Missing

Needs:

* Dynamic route by slug
* Image gallery
* Product information
* Seller details
* Favorite button
* Similar products
* Not-found handling

---

### Create Product Missing

Needs:

* Form UI
* Controlled inputs or React Hook Form
* Validation with Arabic messages
* Select fields
* Mutation using React Query
* Success feedback
* Optional redirect after creation

---

### Favorites Missing

Needs:

* Local Storage persistence
* `useFavorites` hook
* Favorite button
* Favorites page
* Empty state
* Hydration-safe implementation

---

### Admin Dashboard Missing

Needs:

* Stats cards
* Products count
* Count by category
* Count by city
* Latest products
* Products table
* Dummy action buttons

---

### UI Polish Missing

Needs:

* Final Home Page
* Product cards
* Loading skeletons
* Empty states
* Error states
* Micro-interactions
* Better responsive behavior
* Mobile navigation
* Accessibility pass

---

### Deployment Missing

Needs:

* Production build check
* README
* Vercel deployment
* Portfolio explanation
* Screenshots or preview assets

---

## 8. Next Recommended Feature

### Recommended Next Feature

Build the Products Listing Page.

Suggested route:

```txt
/products
```

### Why This Feature Next?

The Products Listing Page is the core of the marketplace.

It will connect the most important pieces built so far:

* Mock API
* Product data model
* React Query
* Product UI components
* Search
* Filters
* Loading and empty states

### Suggested Branch

```txt
feat/products-listing
```

### Suggested Commit Message

```txt
feat: build products listing page with search and filters
```

### Suggested Scope

Build the first version of:

* `/products` route
* Product card component
* Product grid component
* Basic search by title
* Filter by category
* Filter by city
* Filter by condition
* Sort by latest and price
* Loading state
* Empty state
* Error state

### Recommended Files

```txt
src/app/products/page.tsx

src/features/products/components/product-card.tsx
src/features/products/components/product-grid.tsx
src/features/products/components/product-filters.tsx
src/features/products/components/products-listing-view.tsx
```

### Important Engineering Note

The page itself should ideally remain a Server Component where possible, while the interactive listing view should be a Client Component because it will use:

* React Query hooks
* Search state
* Filter state
* Sort state

Suggested separation:

```txt
src/app/products/page.tsx
  -> renders metadata/static shell
  -> imports ProductsListingView

ProductsListingView
  -> "use client"
  -> owns query and filters state
```

---

## Current Development Rule

Do not start building new features automatically.

Before any new feature:

1. Create a dedicated branch.
2. Define the feature scope.
3. List files to create/change.
4. Implement in small steps.
5. Explain every file and important decision.
6. Run build.
7. Commit with a clear message.
8. Push the branch.
9. Update this `PROJECT_STATE.md` if the feature changes project state meaningfully.

---

## Current Status Summary

The project currently has a solid foundation:

* Next.js setup complete.
* GitHub workflow started.
* shadcn/ui installed.
* RTL and dark mode configured.
* Base layout created.
* Product data model and mock API created.
* React Query setup is the next key integration point if not already completed.

The recommended next engineering step is to finish React Query integration if not fully completed, then build the Products Listing Page.
