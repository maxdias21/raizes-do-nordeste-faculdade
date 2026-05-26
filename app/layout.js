"use client";

import "./globals.css";

import Protected from "../components/Protected";

import {CartProvider} from "../context/Cart";
import {UserProvider} from "../context/User";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <Protected>
            <UserProvider>
                <CartProvider>
                    {children}
                </CartProvider>
            </UserProvider>
        </Protected>
        </body>
        </html>
    );
}
