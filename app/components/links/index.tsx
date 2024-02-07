"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./style.css";

export function Links() {
    const pathname = usePathname();

    return (
        <nav className="links">
            <Link
                className={`link ${pathname === "/" ? "active" : ""}`}
                href="/"
            >
                Home
            </Link>
            <Link
                className={`link ${pathname === "/users" ? "active" : ""}`}
                href="/users"
            >
                Users
            </Link>
            <Link
                className={`link ${pathname === "/posts" ? "active" : ""}`}
                href="/posts"
            >
                Posts
            </Link>
            <Link
                className={`link ${pathname === "/todos" ? "active" : ""}`}
                href="/todos"
            >
                Todos
            </Link>
        </nav>
    );
}
