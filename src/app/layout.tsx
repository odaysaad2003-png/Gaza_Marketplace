import type {Metadata} from "next";
import {Cairo} from "next/font/google";
import "./globals.css";

import {ThemeProvider} from "@/components/theme/theme-provider";

const cairo = Cairo({
    subsets: ["arabic", "latin"],
    variable: "--font-cairo",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Mini Marketplace Gaza",
    description: "منصة محلية لعرض وبيع وشراء المنتجات في غزة",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <body className={`${cairo.variable} font-sans antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
