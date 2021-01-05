import React from 'react';
import { Filter, TextInput } from 'react-admin';

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput
            label="Title"
            source="PRODUCTNAME_NAME"
            defaultValue="Hello, World!"
        />
    </Filter>
);

export default ProductFilter;
