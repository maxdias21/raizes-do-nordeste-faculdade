"use client";

import "./globals.css";

import Protected from "./components/Protected";
import {CartProvider} from "../context/Cart";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Protected>
            <CartProvider>
                {children}
            </CartProvider>
        </Protected>
        </body>
        </html>
    );
}
