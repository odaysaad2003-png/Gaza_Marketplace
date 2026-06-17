"use client";

import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import type {DistributionItem} from "../utils/admin-analytics";

type CategoryDistributionChartProps = {
    data: DistributionItem[];
};

export function CategoryDistributionChart({data}: CategoryDistributionChartProps) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid stroke="var(--border)" vertical={false} />
                <XAxis
                    dataKey="name"
                    tick={{fill: "var(--muted-foreground)", fontSize: 12}}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    allowDecimals={false}
                    tick={{fill: "var(--muted-foreground)", fontSize: 12}}
                    axisLine={false}
                    tickLine={false}
                />
                <Tooltip
                    cursor={{fill: "var(--muted)"}}
                    contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                        color: "var(--foreground)",
                    }}
                />
                <Bar dataKey="value" name="عدد المنتجات" fill="var(--primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}
