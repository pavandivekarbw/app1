import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Links } from "./components/links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="main-container">
                    <div className="sidebar">
                        <Links></Links>
                    </div>
                    <div className="content">{children}</div>
                </div>
            </body>
        </html>
    );
}
