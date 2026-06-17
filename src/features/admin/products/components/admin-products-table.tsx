import Image from "next/image";
import Link from "next/link";
import {AlertTriangle, CheckCircle2, Clock3, Eye, MoreHorizontal, Pencil, ShieldAlert, Trash2} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {formatDate, formatPrice} from "@/lib/formatters";
import {cn} from "@/lib/utils";
import type {Product} from "@/features/products/types/product.types";

import {
    getAdminProductStatus,
    getAdminProductStatusDescription,
    getAdminProductStatusLabel,
} from "../utils/admin-product-status";
import type {AdminProductStatus} from "../types/admin-products.types";

type AdminProductsTableProps = {
    products: Product[];
};

export function AdminProductsTable({products}: AdminProductsTableProps) {
    return (
        <Card className="overflow-hidden rounded-[2rem] border-border/70 bg-card/85 shadow-sm shadow-black/[0.03]">
            <CardHeader className="flex flex-col gap-3 border-b border-border/70 bg-muted/20 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <CardTitle className="text-xl font-black text-foreground">Product Operations</CardTitle>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        مراجعة تشغيلية للمنتجات، حالة النشر، بيانات البائع، وأولوية المتابعة.
                    </p>
                </div>

                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                    {products.length} منتج
                </Badge>
            </CardHeader>

            <CardContent className="p-0">
                <div className="hidden overflow-x-auto lg:block">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-border/70 bg-muted/40 hover:bg-muted/40">
                                <TableHead className="min-w-[320px] px-5 py-4 text-right">المنتج</TableHead>
                                <TableHead className="min-w-[150px] px-4 py-4 text-right">الحالة الإدارية</TableHead>
                                <TableHead className="min-w-[130px] px-4 py-4 text-right">التصنيف</TableHead>
                                <TableHead className="min-w-[120px] px-4 py-4 text-right">الموقع</TableHead>
                                <TableHead className="min-w-[130px] px-4 py-4 text-right">السعر</TableHead>
                                <TableHead className="min-w-[150px] px-4 py-4 text-right">البائع</TableHead>
                                <TableHead className="min-w-[140px] px-4 py-4 text-right">تاريخ النشر</TableHead>
                                <TableHead className="w-[90px] px-5 py-4 text-right">إجراءات</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {products.map((product) => (
                                <EnterpriseProductRow key={product.id} product={product} />
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="space-y-3 p-4 lg:hidden">
                    {products.map((product) => (
                        <EnterpriseMobileProductCard key={product.id} product={product} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

type ProductRowProps = {
    product: Product;
};

function EnterpriseProductRow({product}: ProductRowProps) {
    const status = getAdminProductStatus(product);
    const imageSrc = product.images[0] ?? "/placeholder.svg";

    return (
        <TableRow className="border-border/70 align-middle hover:bg-muted/30">
            <TableCell className="px-5 py-4">
                <div className="flex items-center gap-4">
                    <Link
                        href={`/products/${product.slug}`}
                        className="relative h-16 w-20 shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-muted"
                    >
                        <Image
                            src={imageSrc}
                            alt={product.title}
                            fill
                            sizes="80px"
                            className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </Link>

                    <div className="min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                            <Link href={`/products/${product.slug}`}>
                                <p className="line-clamp-1 font-black text-foreground transition-colors hover:text-primary">
                                    {product.title}
                                </p>
                            </Link>

                            {product.isFeatured ? (
                                <Badge className="rounded-full px-2.5 py-0.5 text-xs">مميز</Badge>
                            ) : null}
                        </div>

                        <p className="line-clamp-1 text-xs leading-5 text-muted-foreground">{product.description}</p>

                        <div className="flex flex-wrap gap-2 pt-1">
                            <Badge variant="outline" className="rounded-full text-xs">
                                {product.condition}
                            </Badge>
                            <Badge variant="secondary" className="rounded-full text-xs">
                                ID: {product.id}
                            </Badge>
                        </div>
                    </div>
                </div>
            </TableCell>

            <TableCell className="px-4 py-4">
                <ProductStatusBadge status={status} />
            </TableCell>

            <TableCell className="px-4 py-4">
                <Badge variant="secondary" className="rounded-full">
                    {product.category}
                </Badge>
            </TableCell>

            <TableCell className="px-4 py-4">
                <div className="space-y-1">
                    <p className="font-bold text-foreground">{product.city}</p>
                    <p className="text-xs text-muted-foreground">قطاع غزة</p>
                </div>
            </TableCell>

            <TableCell className="px-4 py-4">
                <div className="space-y-1">
                    <p className="text-base font-black text-primary">{formatPrice(product.price)}</p>
                    <p className="text-xs text-muted-foreground">ILS</p>
                </div>
            </TableCell>

            <TableCell className="px-4 py-4">
                <div className="space-y-1">
                    <p className="line-clamp-1 font-bold text-foreground">{product.sellerName}</p>
                    <p className="line-clamp-1 text-xs text-muted-foreground">
                        {product.sellerPhone || product.contactMethod || "لا توجد بيانات تواصل"}
                    </p>
                </div>
            </TableCell>

            <TableCell className="px-4 py-4 text-sm text-muted-foreground">{formatDate(product.createdAt)}</TableCell>

            <TableCell className="px-5 py-4">
                <ProductActions product={product} />
            </TableCell>
        </TableRow>
    );
}

function ProductStatusBadge({status}: {status: AdminProductStatus}) {
    const Icon = status === "published" ? CheckCircle2 : status === "pending_review" ? Clock3 : AlertTriangle;

    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold",
                status === "published" && "border-primary/20 bg-primary/10 text-primary",
                status === "pending_review" && "border-border bg-secondary text-secondary-foreground",
                status === "needs_attention" && "border-destructive/20 bg-destructive/10 text-destructive"
            )}
            title={getAdminProductStatusDescription(status)}
        >
            <Icon className="h-3.5 w-3.5" />
            {getAdminProductStatusLabel(status)}
        </div>
    );
}

function ProductActions({product}: ProductRowProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">فتح إجراءات المنتج</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>إجراءات المنتج</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href={`/products/${product.slug}`}>
                        <Eye className="h-4 w-4" />
                        عرض صفحة المنتج
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem disabled>
                    <Pencil className="h-4 w-4" />
                    تعديل المنتج — قريبًا
                </DropdownMenuItem>

                <DropdownMenuItem disabled>
                    <ShieldAlert className="h-4 w-4" />
                    مراجعة إدارية — لاحقًا
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem disabled variant="destructive">
                    <Trash2 className="h-4 w-4" />
                    حذف يحتاج صلاحيات
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function EnterpriseMobileProductCard({product}: ProductRowProps) {
    const status = getAdminProductStatus(product);
    const imageSrc = product.images[0] ?? "/placeholder.svg";

    return (
        <div className="rounded-[1.75rem] border border-border/70 bg-background/60 p-4 shadow-sm shadow-black/[0.02]">
            <div className="flex items-start gap-4">
                <Link
                    href={`/products/${product.slug}`}
                    className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-muted"
                >
                    <Image src={imageSrc} alt={product.title} fill sizes="96px" className="object-cover" />
                </Link>

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                            <Link href={`/products/${product.slug}`}>
                                <p className="line-clamp-1 font-black text-foreground">{product.title}</p>
                            </Link>
                            <p className="mt-1 text-sm font-black text-primary">{formatPrice(product.price)}</p>
                        </div>

                        <ProductActions product={product} />
                    </div>

                    <div className="mt-3">
                        <ProductStatusBadge status={status} />
                    </div>
                </div>
            </div>

            <p className="mt-4 line-clamp-2 text-sm leading-6 text-muted-foreground">{product.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-full">
                    {product.category}
                </Badge>

                <Badge variant="outline" className="rounded-full">
                    {product.city}
                </Badge>

                <Badge variant="outline" className="rounded-full">
                    {product.condition}
                </Badge>

                {product.isFeatured ? <Badge className="rounded-full">مميز</Badge> : null}
            </div>

            <div className="mt-4 grid gap-3 border-t border-border/70 pt-4 text-xs text-muted-foreground sm:grid-cols-2">
                <div>
                    <p className="font-bold text-foreground">{product.sellerName}</p>
                    <p className="mt-1">{product.sellerPhone || product.contactMethod || "لا توجد بيانات تواصل"}</p>
                </div>

                <div className="sm:text-left">
                    <p>تاريخ النشر</p>
                    <p className="mt-1 font-bold text-foreground">{formatDate(product.createdAt)}</p>
                </div>
            </div>
        </div>
    );
}
