"use client";

import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

import type {DistributionItem} from "../utils/admin-analytics";

type FeaturedProductsChartProps = {
    data: DistributionItem[];
};

const chartColors = ["var(--primary)", "var(--muted-foreground)"];

export function FeaturedProductsChart({data}: FeaturedProductsChartProps) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Tooltip
                    contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                        color: "var(--foreground)",
                    }}
                />
                <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={95} paddingAngle={4}>
                    {data.map((entry, index) => (
                        <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
