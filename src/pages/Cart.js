import React from 'react'
import styled from 'styled-components'
import CartList from '../components/CartList/CartList'
import OrderSummary from '../components/OrderSummary/OrderSummary'

const CartContainer = styled.div``

const Cart = () => {
    return (
    <CartContainer>
        <CartList />
        <OrderSummary />
    </CartContainer>
    );
}

export default Cart