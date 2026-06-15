import {Skeleton} from "@/components/ui/skeleton";
import {cn} from "@/lib/utils";

type SkeletonListProps = {
    count: number;
    className?: string;
    itemClassName?: string;
};

export function SkeletonList({count, className, itemClassName}: SkeletonListProps) {
    return (
        <div className={cn("grid gap-3", className)}>
            {Array.from({length: count}).map((_, index) => (
                <Skeleton key={index} className={itemClassName} />
            ))}
        </div>
    );
}
