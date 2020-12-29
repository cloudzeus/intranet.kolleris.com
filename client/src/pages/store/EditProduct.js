import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="PRODUCTNAME_NAME" />
            <TextInput source="MANUFACTURECODE" />
            <TextInput source="EANCODE" />
            <TextInput source="PRICER" />
            <TextInput source="PRICEW" />
        </SimpleForm>
    </Edit>
);

export default ProductEdit;
