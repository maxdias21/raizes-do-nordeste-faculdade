"use client";

import {createContext, useEffect, useState} from "react";

export const UserContext = createContext();

export function UserProvider({children}) {
    const [profile, setProfile] = useState(() => {
        if (typeof window === "undefined") {
            return {};
        }

        try {
            const data = localStorage.getItem("profile");
            return data ? JSON.parse(data) : {};
        } catch {
            return {};
        }
    });

    useEffect(() => {
        localStorage.setItem("profile", JSON.stringify(profile));

    }, [profile]);

    function addStore(newStore) {
        setProfile((prevState) => ({...prevState,store: newStore}));
    }

    function addPoints(cart) {
        const getPoints = Math.floor(cart.map((item) => item.price * item.quantity).reduce((acc, current) => acc + current, 0));
        console.log(getPoints);
        setProfile((prevState) => ({...prevState, points: (prevState.points ?? 0)  + getPoints}));
    }

    function redeemPoints(points) {
        setProfile((prevState) => ({...prevState, points: prevState.points ?? 0 - points}));
    }

    return (
        <UserContext.Provider value={{profile, setProfile, addPoints, redeemPoints, addStore}}>
            {children}
        </UserContext.Provider>
    );
}