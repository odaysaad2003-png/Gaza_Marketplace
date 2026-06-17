import type {Product} from "@/features/products/types/product.types";

import type {AdminProductStatus} from "../types/admin-products.types";

export function getAdminProductStatus(product: Product): AdminProductStatus {
    if (product.condition === "يحتاج صيانة") {
        return "needs_attention";
    }

    if (!product.sellerPhone && !product.contactMethod) {
        return "pending_review";
    }

    return "published";
}

export function getAdminProductStatusLabel(status: AdminProductStatus) {
    const labels: Record<AdminProductStatus, string> = {
        published: "منشور",
        pending_review: "قيد المراجعة",
        needs_attention: "يحتاج متابعة",
    };

    return labels[status];
}

export function getAdminProductStatusDescription(status: AdminProductStatus) {
    const descriptions: Record<AdminProductStatus, string> = {
        published: "ظاهر للمستخدمين في السوق",
        pending_review: "بيانات التواصل تحتاج مراجعة",
        needs_attention: "حالة المنتج تحتاج انتباه",
    };

    return descriptions[status];
}
