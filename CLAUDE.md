@AGENTS.md
# 🏪 Mini Marketplace Gaza — Project State (Final Production)

## 📌 Project Status

- Status: 🚀 Deployed Successfully (Vercel)
- Type: Frontend Portfolio Project (Next.js 16)
- Architecture: Feature-based scalable structure
- Data Layer: Mock API + Local Storage
- Backend: Not implemented yet
- Auth: Not implemented

---

## 🧠 Tech Stack

- Next.js 16 (App Router + Turbopack)
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Query (TanStack Query)
- Zustand (state management)
- Zod (validation)
- Swiper (image galleries)
- Recharts (analytics dashboard)
- Lucide React

---

## 📁 Project Structure (Core)

src/
 ├── app/
 │    ├── (public) pages
 │    ├── admin/
 │    └── products/
 │
 ├── features/
 │    ├── products/
 │    ├── favorites/
 │    ├── admin/
 │    │    ├── analytics/
 │    │    ├── products/
 │    │    └── settings/
 │
 ├── components/
 │    ├── ui/
 │    ├── layout/
 │    ├── theme/
 │
 ├── lib/
 └── styles/

---

## ✨ Features Implemented

### 🏪 Public Marketplace

- Product listing page
- Product details page
- Create product page (form + validation)
- Favorites system (LocalStorage)
- RTL Arabic UI
- Dark/Light mode
- Responsive design

---

### 🛒 Products System

- Mock API data layer
- Product filtering system
- Categories support
- Cities support
- Condition tracking
- Featured products system
- Image gallery (Swiper)

---

### ❤️ Favorites System

- Add/remove favorites
- Persistent storage
- Favorites page
- Hydration-safe implementation

---

### 🧑‍💼 Admin Dashboard (Enterprise Level)

#### 📊 Overview
- Stats cards
- Insights section
- Empty/loading states

#### 📦 Products Management
- Admin product table
- Filters (category, city, condition)
- Status badges
- Mobile responsive cards

#### 📈 Analytics Dashboard
- Recharts integration
- Category distribution
- City distribution
- Price ranges
- Featured vs normal products
- Top products lists

#### ⚙️ Settings UI
- Marketplace settings
- Moderation preferences
- Contact & safety policy
- System status section
- Read-only admin simulation

---

## 🎨 UI/UX System

- shadcn/ui components
- Consistent design tokens
- Dark mode support
- Smooth animations
- Hover interactions
- Responsive grid system
- Card-based architecture

---

## 🧩 Data Model

### Product Type

```ts
type Product = {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  city: string;
  condition: string;
  images: string[];
  sellerName: string;
  sellerPhone: string;
  contactMethod: string;
  createdAt: string;
  isFeatured: boolean;
};