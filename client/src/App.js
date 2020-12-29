import React from 'react';
import {
    Admin,
    Resource,
    Layout,
    ShowGuesser,
    ListGuesser,
    EditGuesser,
} from 'react-admin';
import { authProvider } from './authProvider';
import Header from './components/shared/header';
import Cart from './pages/cart/index';
import Login from './pages/login/Login';

import { dataProvider } from './pages/store/DataProvider';
import ProductEdit from './pages/store/EditProduct';
import ProductDetails from './pages/store/ProductDetails';
import { ProductList } from './pages/store/ProductList';
import { theme } from './theme';

const App = () => {
    return (
        <Admin
            authProvider={authProvider}
            loginPage={Login}
            dataProvider={dataProvider}
            theme={theme}
        >
            <Resource
                name="products"
                list={ProductList}
                show={ProductDetails}
                edit={ProductEdit}
            />
            <Resource name="cart" show={Cart} />
        </Admin>
    );
};
export default App;
