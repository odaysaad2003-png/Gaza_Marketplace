import type {Metadata} from "next";
import {Cairo} from "next/font/google";
import "./globals.css";

import {Footer} from "@/components/layout/footer";
import {Navbar} from "@/components/layout/navbar";
import {ThemeProvider} from "@/components/theme/theme-provider";
import {QueryProvider} from "@/components/providers/query-provider";
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
            <body className={`${cairo.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <QueryProvider>
                        <div className="flex min-h-screen flex-col">
                            <Navbar />

                            <main className="flex-1">{children}</main>

                            <Footer />
                        </div>
                    </QueryProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
