import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const OrderSummaryContainer = styled.div`
    width: 315px;
    border: 1px solid #E0E0E0;
    margin-top: 30px;
    float: right;
`

const OrderSummaryHeader = styled.div`
    padding: 10px 20px;
    border-bottom: 1px solid #E0E0E0;
`

const OrderSummaryTitle = styled.h2`
    font-family: Roboto-Bold;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.1px;
    margin: 0;
`

const OrderSummaryContent = styled.div`
    padding: 20px 20px 10px 20px;
`

const RedButton = styled.button`
    width: 100%;
    border: 0;
    background-color: #E53935;
    color: #FFFFFF;
    text-align: center;
    font-family: Roboto-Medium;
    font-size: 14px;
    padding: 16px 0;
    margin: 10px 0;
`

const OrderSummaryItem = styled.div`
    font-family: Roboto-Regular;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 10px;
`

const OrderSummaryValue = styled.div`
    font-family: Roboto-Medium;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    padding-bottom: 10px;
`

const TotalText = styled.div`
    font-family: Roboto-Bold;
    font-size: 16px;
    line-height: 30px;
    margin: 20px 0 10px 0;
`

const TotalValue = styled.div`
    text-align: right;
    font-family: Roboto-Bold;
    font-size: 16px;
    line-height: 30px;
    margin: 20px 0 10px 0;
`

const OrderSummary = () => {
    return (
        <OrderSummaryContainer>
            <OrderSummaryHeader>
                <OrderSummaryTitle>
                    RESUMO DO PEDIDO
                </OrderSummaryTitle>
            </OrderSummaryHeader>
            <OrderSummaryContent>
                <Grid container>
                    <Grid item xs={8}>
                        <OrderSummaryItem>
                            Itens
                        </OrderSummaryItem>
                    </Grid>
                    <Grid item xs={4}>
                        <OrderSummaryValue>
                            5
                        </OrderSummaryValue>
                    </Grid>
                    <Grid item xs={8}>
                        <OrderSummaryItem>
                            Total em produtos
                        </OrderSummaryItem>
                    </Grid>
                    <Grid item xs={4}>
                        <OrderSummaryValue>
                            R$ 62,50
                        </OrderSummaryValue>
                    </Grid>
                    <Grid item xs={8}>
                        <OrderSummaryItem>
                            Descontos
                        </OrderSummaryItem>
                    </Grid>
                    <Grid item xs={4}>
                        <OrderSummaryValue>
                            R$ 0,00
                        </OrderSummaryValue>
                    </Grid>
                    <Grid item xs={8}>
                        <TotalText>
                            Total
                        </TotalText>
                    </Grid>
                    <Grid item xs={4}>
                        <TotalValue>
                            R$ 62,50
                        </TotalValue>
                    </Grid>
                </Grid>
                <RedButton>
                    Finalizar a compra
                </RedButton>
            </OrderSummaryContent>
        </OrderSummaryContainer>
    )
}

export default OrderSummary