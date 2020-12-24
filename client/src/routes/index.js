import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Store from '../pages/store';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Cart from '../pages/cart';
import ProtectedRoute from './ProtectedRoutes';
import Login from '../pages/login/Login';
import CartContextProvider from '../contexts/CartContext';
import ProductsContextProvider from '../contexts/ProductsContext';

const Routes = () => {
    return (
        <Router>
            <Switch>
                {/* <Route path="/about" component={About} /> */}
                <Route path="/login" component={Login} />

                <ProductsContextProvider>
                    <CartContextProvider>
                        <ProtectedRoute exact path="/" component={Store} />
                        <ProtectedRoute path="/cart" component={Cart} />
                    </CartContextProvider>
                </ProductsContextProvider>
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};

export default Routes;
