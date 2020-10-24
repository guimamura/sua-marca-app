import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import PersonIcon from '@material-ui/icons/Person'
import RoomIcon from '@material-ui/icons/Room'
import suaMarcaLogo from '../../assets/img/sua-marca-logo.png'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import TextField from '@material-ui/core/TextField'
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from '@material-ui/icons/Search'

const HeaderContainer = styled.header`
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.05);
    position: fixed;
    z-index: 1;
`

const TopMenu = styled.div`
    margin: 20px auto 10px auto;
    vertical-align: middle;
    width: 88%;
`

const TextIcon = styled.div`
    display: inline-flex;
    vertical-align: middle;
` 

const TopMenuText = styled.span`
    margin-left: 5px;
    font-size: 12px;
    line-height: 20px;
`

const LogoContainer = styled.div`
    margin: 10px 0;
`

const Logo = styled.img``

const Menu = styled.nav`
    font-weight: bold;
    font-size: 14px;
    margin: 10px 0;
`

const MenuList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`

const MenuItem = styled.li`
    line-height: 25px;
    letter-spacing: 0.1px;
    display: inline-flex;
    vertical-align: middle;

    &:not(:last-child) {
        margin-right: 35px;
    }
`

const MenuItemText = styled.span`
    margin-left: 5px;
`

const SearchInput = styled(TextField)`
    .MuiInputBase-input {
        font-size: 14px;
    }

    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid black!important;
    line-height: 20px;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #BDBDBD;
        opacity: 1; /* Firefox */
        font-size: 14px;
    }
`

const CartTotal = styled.div`
    line-height: 25px;
    text-align: right;
`

const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
    color: #E53935;
    margin-right: 5px;
`

const Header = () => {
    return (
        <HeaderContainer>
            <TopMenu>
                <Box display="flex">
                    <Box flexGrow={1}>
                        <TextIcon>
                            <WhatsAppIcon /> <TopMenuText>(47) 9999-9999</TopMenuText>
                        </TextIcon>
                    </Box>
                    <Box>
                        <TextIcon>
                            <PersonIcon /> <TopMenuText>Arethusa</TopMenuText>
                        </TextIcon>
                    </Box>
                    <Box ml={3}>
                        <TextIcon>
                            <RoomIcon /> <TopMenuText>Bom Retiro - Joinville, SC</TopMenuText>
                        </TextIcon>
                    </Box>
                </Box>

                <Box display="flex" justifyContent="center">
                    <Box>
                        <LogoContainer>
                            <Logo src={suaMarcaLogo} />
                        </LogoContainer>
                    </Box>
                </Box>

                <Menu>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={4}>
                            <MenuList>
                                <MenuItem>
                                    <MenuIcon />
                                    <MenuItemText>
                                        SETORES
                                    </MenuItemText>
                                </MenuItem>
                                <MenuItem>
                                    OFERTAS
                                </MenuItem>
                            </MenuList>
                        </Grid>
                        <Grid item xs={4}>
                            <SearchInput 
                                placeholder="O que você procura?" 
                                InputProps={{
                                    disableUnderline: true,
                                    endAdornment: (
                                    <InputAdornment disablePointerEvents={true}>
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                    )
                                }} 
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CartTotal>
                                <TextIcon>
                                    <StyledShoppingCartIcon /> R$ 62,50
                                </TextIcon>
                            </CartTotal>
                        </Grid>
                    </Grid>
                </Menu>
            </TopMenu>
        </HeaderContainer>
    )
}

export default Header