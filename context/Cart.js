"use client";

import {useState, createContext, useEffect, useContext} from "react";

import {UserContext} from "./User";

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
    const [orders, setOrders] = useState(() => {
        if (typeof window === "undefined") {
            return [];
        }

        try {
            const data = localStorage.getItem("order");
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    });

    const {addPoints} = useContext(UserContext)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("order", JSON.stringify(orders));
    }, [orders]);

    function addToCart({food, profile}) {
        const exists = cart.some((item) => item.id === food.id);

        if (exists) {
            setCart((prevState) => prevState.map((item) => item.id === food.id ?
                {...item, quantity: item.quantity + 1, store: profile?.store} : item));
        } else {
            setCart((prevState) => [...prevState, {...food, quantity: 1, store: profile?.store}]);
        }
    }

    function addOrder() {
        addPoints(cart);

        if (cart.length > 0) {
            setOrders((prevState) => [...prevState, {items: cart, id: Date.now(), date: new Date()}]);
            setCart([]);
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
        <CartContext.Provider value={{addToCart, cart, removeCart, totalPrice, totalItems, addOrder, orders}}>
            {children}
        </CartContext.Provider>
    );
}
