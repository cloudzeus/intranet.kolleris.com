import React from 'react';
import {
    Admin,
    Resource,
    Layout,
    ShowGuesser,
    EditGuesser,
    ListGuesser,
} from 'react-admin';
import Header from '../../components/shared/header';
import Cart from '../cart/index';

import { dataProvider } from './DataProvider';
import ProductDetails from './ProductDetails';
import { ProductList } from './ProductList';

const MyLayout = (props) => (
    <Layout className="mt-0" {...props} appBar={Header} />
);

const ProductsGrid = () => {
    return (
        <Admin layout={MyLayout} dataProvider={dataProvider}>
            <Resource
                name="products"
                list={ListGuesser}
                show={ShowGuesser}
                edit={EditGuesser}
            />
            <Resource name="cart" show={Cart} />
        </Admin>
    );
};
export default ProductsGrid;
