import React from 'react';
import { Filter, TextInput } from 'react-admin';

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput className="ml-3" label="Search" source="q" alwaysOn />
    </Filter>
);

export default ProductFilter;
