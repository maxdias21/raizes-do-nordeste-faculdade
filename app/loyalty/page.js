"use client";

import styles from "./page.module.css";

import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/User";

import {ITEMS_REWARDS} from "../../data/itemsRewards";
import PageHeader from "../components/PageHeader";
import RewardsInfo from "../components/Loyalty/RewardsInfo";
import Rewards from "../components/Loyalty/Rewards";
import PointsQuantity from "../components/Loyalty/PointsQuantity";
import Container from "../components/Container";

function LoyaltyPage() {
    const {profile} = useContext(UserContext);
    const [mounted, setMounted] = useState(false);
    const [itemsRewards, setItemsRewards] = useState([]);


    useEffect(() => {
        const storageItems = localStorage.getItem("items_rewards");

        if (!storageItems) {
            localStorage.setItem("items_rewards", JSON.stringify(ITEMS_REWARDS));
            setItemsRewards(ITEMS_REWARDS);
        } else {
            setItemsRewards(JSON.parse(storageItems));
        }
    }, []);

    useEffect(() => {
        if (itemsRewards?.length > 0) {
            localStorage.setItem("items_rewards", JSON.stringify(itemsRewards));
        }
    }, [itemsRewards]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }


    return (
        <Container>
            <PageHeader title="Fidelidade"/>
            <PointsQuantity profile={profile}/>
            <RewardsInfo/>
            <Rewards itemsRewards={itemsRewards}/>
        </Container>
    );
}

export default LoyaltyPage;