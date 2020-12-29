import * as React from 'react';
import { Show, SimpleShowLayout, TextField, RichTextField } from 'react-admin';
import PriceField from './PriceField';

const ProductDetails = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="MTRL" />
            <TextField source="ERPCODE_CODE" />
            <TextField source="PRODUCTNAME_NAME" />
            <TextField source="EANCODE" />
            <TextField source="MANUFACTURECODE" />
            <TextField source="VAT" />
            <TextField source="VATNAME" />
            <TextField source="MTRUNIT1" />
            <TextField source="MTRUNIT3" />
            <TextField source="MTRCATEGORY" />
            <TextField source="COMMERCIAL_CATEGORY_NAME" />
            <TextField source="MTRGROUP" />
            <TextField source="MTRCATEGORY_1" />
            <PriceField source="PRICER" />
            <PriceField source="PRICEW" />
            <TextField source="id" />
        </SimpleShowLayout>
    </Show>
);

export default ProductDetails;
