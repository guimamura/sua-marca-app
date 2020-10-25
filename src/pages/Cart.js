import React from 'react'
import styled from 'styled-components'
import CartList from '../components/CartList/CartList'
import OrderSummary from '../components/OrderSummary/OrderSummary'
import Grid from '@material-ui/core/Grid'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import PaymentIcon from '@material-ui/icons/Payment'

const CartContainer = styled.div`
    padding-top: 157.63px;
`

const OffersMenu = styled.div`
    font-size: 12px;
    width: 100%;
    background-color: #F5F5F5;
    padding: 20px 0px;
    line-height: 20px;
`

const OffersContent = styled.div`
    width: 67%;
    margin: 0 auto;
`

const DeliveryOffer = styled.div`
    text-align: left;
`

const DiscountOffer = styled.div`
    text-align: center;
`

const PaymentOffer = styled.div`
    text-align: right;
`

const TextIcon = styled.div`
    display: inline-flex;
    vertical-align: middle;
    line-height: 20px;
    font-weight: 500;

    svg {
        margin-right: 5px;
        color: #616161;
        width: 20px;
    }
`

const CartTitle = styled.h1`
    color: #212121;
    font-family: Monserrat-Regular;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-align: center;
    margin: 30px 0 0 0;
`

const Cart = () => {
    return (
    <CartContainer>
        <OffersMenu>
            <OffersContent>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item xs={4}>
                        <DeliveryOffer>
                            <TextIcon>
                                <LocalShippingIcon /> Delivery apenas para Joinville
                            </TextIcon>
                        </DeliveryOffer>
                    </Grid>
                    <Grid item xs={4}>
                        <DiscountOffer>
                            <TextIcon>
                                <LocalOfferIcon /> Desconto de 10% nas compras acima de R$ 200,00
                            </TextIcon>
                        </DiscountOffer>
                    </Grid>
                    <Grid item xs={4}>
                        <PaymentOffer>
                            <TextIcon>
                                <PaymentIcon /> Pague em até 12x no cartão
                            </TextIcon>
                        </PaymentOffer>
                    </Grid>
                </Grid>
            </OffersContent>
        </OffersMenu>
        <CartTitle>
            Carrinho
        </CartTitle>
        <CartList />
        <OrderSummary />
    </CartContainer>
    );
}

export default Cart