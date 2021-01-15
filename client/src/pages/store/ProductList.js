import * as React from 'react';
import { List, Datagrid, TextField, ShowButton, EditButton } from 'react-admin';

import './ProductsGrid.module.scss';
import ProductFilter from './ProductFilter';
import PriceField from './PriceField';
import EmptyProducts from './EmptyProducts';
import AddToCart from './AddToCartField';
import ShowRecordField from './ShowRecordField';
import ProductsToolBar from './ProductsToolBar';

export const ProductList = (props) => {
    return (
        <List
            {...props}
            title="Kolleris - store"
            empty={<EmptyProducts />}
            filters={<ProductFilter context="form" />}
            actions={<ProductsToolBar />}
        >
            <Datagrid  hover>
                <TextField
                    source="PRODUCTNAME_NAME"
                    label="PRODUCT NAME"
                    headerClassName="column-header "
                />

                <TextField
                    source="ERPCODE_CODE"
                    label="ERPCODE"
                    headerClassName="column-header "
                />
                <TextField
                    source="EANCODE"
                    label="EANCODE"
                    headerClassName="column-header "
                />
                <TextField
                    source="MANUFACTURECODE"
                    label="MANUFACTURE"
                    headerClassName="column-header "
                />

                <TextField
                    source="COMMERCIAL_CATEGORY_NAME"
                    label="COMMERCIAL CATEGORY NAME"
                    headerClassName="column-header "
                />

                <PriceField
                    source="PRICER"
                    label="PRICER"
                    headerClassName="column-header"
                />
                <AddToCart source="ADD TO CART" label="Cart" />
                {/* <ShowButton /> */}
                {/* <EditButton /> */}
                <ShowRecordField />
            </Datagrid>
        </List>
    );
};
