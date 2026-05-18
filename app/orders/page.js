import React from "react";

import PageHeader from "../components/PageHeader";
import Orders from "../components/Orders/Orders";
import Container from "../components/Container";

function OrdersPage() {
    return (
        <Container>
            <PageHeader title="Meus pedidos"/>
            <Orders />
        </Container>
    );
}

export default OrdersPage;