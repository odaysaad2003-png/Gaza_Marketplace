import Link from "next/link";
import {Eye, MoreHorizontal, Pencil, Trash2} from "lucide-react";

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
import type {Product} from "@/features/products/types/product.types";

type AdminProductsTableProps = {
    products: Product[];
};

export function AdminProductsTable({products}: AdminProductsTableProps) {
    return (
        <Card className="rounded-[2rem] border-border/70 bg-card/85 shadow-sm shadow-black/[0.03]">
            <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <CardTitle className="text-xl font-black text-foreground">إدارة المنتجات</CardTitle>
                    <p className="mt-2 text-sm text-muted-foreground">عرض إداري للمنتجات الحالية من Mock API.</p>
                </div>

                <Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
                    {products.length} منتج
                </Badge>
            </CardHeader>

            <CardContent>
                <div className="hidden overflow-hidden rounded-[1.5rem] border border-border/70 md:block">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-muted/50 hover:bg-muted/50">
                                <TableHead className="text-right">المنتج</TableHead>
                                <TableHead className="text-right">التصنيف</TableHead>
                                <TableHead className="text-right">المدينة</TableHead>
                                <TableHead className="text-right">الحالة</TableHead>
                                <TableHead className="text-right">السعر</TableHead>
                                <TableHead className="text-right">تاريخ النشر</TableHead>
                                <TableHead className="text-right">التمييز</TableHead>
                                <TableHead className="text-right">إجراءات</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <div className="min-w-52">
                                            <p className="line-clamp-1 font-bold text-foreground">{product.title}</p>
                                            <p className="line-clamp-1 text-xs text-muted-foreground">
                                                {product.sellerName}
                                            </p>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <Badge variant="secondary" className="rounded-full">
                                            {product.category}
                                        </Badge>
                                    </TableCell>

                                    <TableCell>{product.city}</TableCell>

                                    <TableCell>
                                        <Badge variant="outline" className="rounded-full">
                                            {product.condition}
                                        </Badge>
                                    </TableCell>

                                    <TableCell className="font-bold text-primary">
                                        {formatPrice(product.price)}
                                    </TableCell>

                                    <TableCell>{formatDate(product.createdAt)}</TableCell>

                                    <TableCell>
                                        {product.isFeatured ? (
                                            <Badge className="rounded-full">مميز</Badge>
                                        ) : (
                                            <Badge variant="secondary" className="rounded-full">
                                                عادي
                                            </Badge>
                                        )}
                                    </TableCell>

                                    <TableCell>
                                        <ProductActions product={product} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="space-y-3 md:hidden">
                    {products.map((product) => (
                        <MobileProductCard key={product.id} product={product} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

type ProductActionsProps = {
    product: Product;
};

function ProductActions({product}: ProductActionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">فتح إجراءات المنتج</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuLabel>إجراءات المنتج</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href={`/products/${product.slug}`}>
                        <Eye className="h-4 w-4" />
                        عرض المنتج
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem disabled>
                    <Pencil className="h-4 w-4" />
                    تعديل لاحقًا
                </DropdownMenuItem>

                <DropdownMenuItem disabled variant="destructive">
                    <Trash2 className="h-4 w-4" />
                    حذف لاحقًا
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function MobileProductCard({product}: ProductActionsProps) {
    return (
        <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-4">
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 space-y-2">
                    <p className="line-clamp-1 font-bold text-foreground">{product.title}</p>
                    <p className="text-sm font-black text-primary">{formatPrice(product.price)}</p>
                </div>

                <ProductActions product={product} />
            </div>

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

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/70 pt-3 text-xs text-muted-foreground">
                <span>{product.sellerName}</span>
                <span>{formatDate(product.createdAt)}</span>
            </div>
        </div>
    );
}
