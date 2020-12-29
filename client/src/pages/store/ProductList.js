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
            title="KOlleris - store"
            empty={<EmptyProducts />}
            filters={<ProductFilter context="form" />}
            actions={<ProductsToolBar />}
        >
            <Datagrid hover>
                {/* <TextField
                source="MTRL"
                label="MTRL"
                headerClassName="column-header "
            /> */}
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
                    label="COMMERCIAL"
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
                <AddToCart source="ADD TO CART" label="Cart" />
                <ShowButton />
                {/* <EditButton /> */}
                {/* <ShowRecordField /> */}
            </Datagrid>
        </List>
    );
};
