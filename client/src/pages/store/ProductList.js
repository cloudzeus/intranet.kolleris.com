import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

import './ProductsGrid.module.scss';
import ProductFilter from './ProductFilter';
import PriceField from './PriceField';
import EmptyProducts from './EmptyProducts';
import AddToCart from './AddToCartField';

export const ProductList = (props) => (
    <List
        {...props}
        empty={<EmptyProducts />}
        filters={<ProductFilter context="form" />}
    >
        <Datagrid rowClick="edit">
            <TextField
                source="MTRL"
                label="MTRL"
                headerClassName="column-header "
            />
            <TextField
                source="PRODUCTNAME_NAME"
                label="PRODUCT NAME"
                headerClassName="column-header "
            />

            <AddToCart source="ADD TO CART" label="Cart" />
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
                source="VAT"
                label="VAT"
                headerClassName="column-header "
            />
            <TextField
                source="VATNAME"
                headerClassName="column-header "
                label="VATNAME"
            />
            <TextField
                source="MTRUNIT1"
                headerClassName="column-header "
                label="MTRUNIT1"
            />
            <TextField
                source="MTRUNIT3"
                headerClassName="column-header "
                label="MTRUNIT3"
            />
            <TextField
                headerClassName="column-header "
                source="MTRCATEGORY"
                label="MTRCATEGORY"
            />
            <TextField
                source="COMMERCIAL_CATEGORY_NAME"
                label="COMMERCIAL CATEGORY NAME"
                headerClassName="column-header "
            />
            <TextField
                source="MTRGROUP"
                label="MTRGROUP"
                headerClassName="column-header"
            />
            {/* <TextField
                source="MTRCATEGORY_1"
                label="MTRCATEGORY 1"
                headerClassName="column-header"
            /> */}
            <PriceField
                source="PRICER"
                label="PRICER"
                headerClassName="column-header"
            />
            <PriceField source="PRICEW" label="PRICEW" />
        </Datagrid>
    </List>
);
