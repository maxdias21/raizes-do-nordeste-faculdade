"use client";

import {useState, createContext, useEffect} from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState(() => {
        if (typeof window === "undefined") {
            return [];
        }

        try {
            const data = localStorage.getItem("cart");
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(food) {
        const exists = cart.some((item) => item.id === food.id);

        if (exists) {
            setCart((prevState) => prevState.map((item) => item.id === food.id ?
                {...item, quantity: item.quantity + 1} : item));
        } else {
            setCart((prevState) => [...prevState, {...food, quantity: 1}]);
        }
    }

    function removeCart(food) {
        const exists = cart.some((item) => item.id === food.id);

        if (!exists) {
            return;
        }

        setCart((prevState) => prevState.map((item) => (item.id === food.id && item.quantity > 0) ?
            {...item, quantity: item.quantity - 1}
            : item).filter(item => item.quantity > 0));
    }

    function totalPrice() {
        return cart.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    }

    function totalItems() {
        return cart.map((item) => ({name: item.name, quantity: item.quantity}));
    }

    return (
        <CartContext.Provider value={{addToCart, cart, removeCart, totalPrice, totalItems}}>
            {children}
        </CartContext.Provider>
    );
}
