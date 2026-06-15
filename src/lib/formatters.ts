export function formatPrice(price: number) {
    return `₪ ${price.toLocaleString("ar")}`;
}

export function formatDate(date: string) {
    return new Intl.DateTimeFormat("ar", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
}
