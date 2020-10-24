import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Cart from '../../pages/Cart.js'

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Cart}></Route>
        </Switch>
    );
}

export default Main;