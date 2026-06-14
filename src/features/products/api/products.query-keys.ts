export const productQueryKeys = {
    all: ["products"] as const,

    lists: () => [...productQueryKeys.all, "list"] as const,

    featured: () => [...productQueryKeys.all, "featured"] as const,

    latest: (limit?: number) => [...productQueryKeys.all, "latest", limit] as const,

    details: () => [...productQueryKeys.all, "detail"] as const,

    detail: (slug: string) => [...productQueryKeys.details(), slug] as const,
};
