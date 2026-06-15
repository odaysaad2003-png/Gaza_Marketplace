import {createSlug} from "@/lib/slug";

import {mockProducts} from "../data/products.mock-data";
import type {CreateProductInput, Product} from "../types/product.types";

let products: Product[] = [...mockProducts];

function wait(ms = 700) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function createProductId() {
    return `product-${Date.now()}`;
}

export async function getProducts() {
    await wait();

    return [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getFeaturedProducts() {
    await wait();

    return products
    .filter((product) => product.isFeatured)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getLatestProducts(limit = 6) {
    await wait();

    return [...products]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export async function getProductBySlug(slug: string) {
    await wait();

    return products.find((product) => product.slug === slug) ?? null;
}

export async function createProduct(input: CreateProductInput) {
    await wait(700);

    const newProduct: Product = {
        id: createProductId(),
        slug: `${createSlug(input.title)}-${Date.now()}`,
        title: input.title,
        description: input.description,
        price: input.price,
        category: input.category,
        city: input.city,
        condition: input.condition,
        images: input.images,
        sellerName: input.sellerName,
        sellerPhone: input.sellerPhone,
        contactMethod: input.contactMethod,
        createdAt: new Date().toISOString(),
        isFeatured: false,
    };

    products = [newProduct, ...products];

    return newProduct;
}

export async function getSimilarProducts(product: Product, limit = 4) {
    await wait();

    return products
    .filter((item) => {
        const isSameProduct = item.id === product.id;
        const isSameCategory = item.category === product.category;

        return !isSameProduct && isSameCategory;
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}