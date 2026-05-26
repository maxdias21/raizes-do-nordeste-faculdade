"use client";

import {useState} from "react";
import React from "react";

import dataFoods from "../../data/foods";

import Search from "../components/Menu/Search";
import Foods from "../components/Menu/Foods";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";



function Menu() {
    const [foodsFilter, setFoodsFilter] = useState(dataFoods);

    return (
        <Container>
            <PageHeader title={"Cardápio"} />
                <Search data={dataFoods} setData={setFoodsFilter} />
                <Foods data={foodsFilter} setData={setFoodsFilter} />
        </Container>
    );
}

export default Menu;