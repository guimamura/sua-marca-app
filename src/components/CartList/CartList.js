import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import { getOffers } from '../../actions/index'
import { connect } from 'react-redux'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import DeleteIcon from '@material-ui/icons/Delete'

const CartListContainer = styled.div`
    width: 80%;
    padding-top: 30px;
    margin: 0 auto;
`

const Cart = styled.div`
    width: 100%;
    padding: 10px 10px 15px 10px;
    border-bottom: 1px solid #E0E0E0;
`

const ProductImage = styled.img`
    height: 90px;
`

const ProductName = styled.div`
    font-family: Roboto-Regular;
    font-size: 14px;
    line-height: 20px;
    color: #212121;
    text-transform: lowercase;

    &:first-letter {
        text-transform: uppercase;
    }
`

const ProductSku = styled.div`
    font-family: Roboto-Medium;
    font-size: 12px;
    line-height: 20px;
    color: #9E9E9E;
    margin: 12px 0;
`

const ProductNote = styled.div`
    font-family: Roboto-Medium;
    font-size: 12px;
    line-height: 20px;
    color: #E53935;
    display: inline-flex;
    vertical-align: middle;

    svg {
        margin-right: 5px;
    }
`

const ProductPrice = styled.div`
    font-family: Roboto-Medium;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
`

const RemoveProduct = styled.div`
    color: #E53935;
    float: right;
    margin-top: 46px;
`

const CartList = (props) => {
    const [cart, setCart] = useState([]);
 
    useEffect(async () => {
      const result = await props
        .getOffers()
        .then((response) => setCart(response))
    }, []);

    const formatCurrency = (value) => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    return (
        <CartListContainer>
            <Grid container>
                <Grid item xs={8}>
                    {
                        cart.map(product => (
                        <Cart key={product.id}>
                            <Grid container>
                                <Grid item xs={2}>
                                    <ProductImage src={product.url_imagem} />
                                </Grid>
                                <Grid item xs={6}>
                                    <ProductName>{product.nome}</ProductName>
                                    <ProductSku>SKU {product.sku}</ProductSku>
                                    <ProductNote><ChatBubbleOutlineIcon />Adicionar observação</ProductNote>
                                </Grid>
                                <Grid item xs={2}>
                                    <div className="def-number-input number-input">
                                        <button onClick={() => console.log('decrease')} className="minus"></button>
                                        <input className="quantity" name="quantity" value={product.quantidade} onChange={()=> console.log('change')}
                                        type="number" />
                                        <button onClick={() => console.log('increase')} className="plus"></button>
                                    </div>
                                </Grid>
                                <Grid item xs={2}>
                                    <ProductPrice>{formatCurrency(product.valor_unitario)}</ProductPrice>
                                    <RemoveProduct><DeleteIcon /></RemoveProduct>
                                </Grid>
                            </Grid>
                        </Cart>
                    ))}
                </Grid>
            </Grid>
        </CartListContainer>
    )
}

const mapStateToProps = (state) => ({
    reducer: state.appReducer
})

const mapDispatchToProps = { getOffers }

export default connect(mapStateToProps, mapDispatchToProps)(CartList)