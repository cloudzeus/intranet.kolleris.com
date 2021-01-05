import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import AuthContext from './contexts/AuthContext';
import App from './App';
import CartContextProvider from './contexts/CartContext';
import ProductsContextProvider from './contexts/ProductsContext';

ReactDOM.render(
    <AuthContext>
        <HelmetProvider>
            <ProductsContextProvider>
                <CartContextProvider>
                    <App />
                </CartContextProvider>
            </ProductsContextProvider>
        </HelmetProvider>
    </AuthContext>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
