"use client";

import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import type {PriceRangeItem} from "../utils/admin-analytics";

type PriceRangeChartProps = {
    data: PriceRangeItem[];
};

export function PriceRangeChart({data}: PriceRangeChartProps) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid stroke="var(--border)" vertical={false} />
                <XAxis
                    dataKey="range"
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
                <Bar dataKey="count" name="عدد المنتجات" fill="var(--primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}
