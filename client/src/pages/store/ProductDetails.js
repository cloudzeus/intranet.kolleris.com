import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    RichTextField,
} from 'react-admin';

const ProductDetails = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="teaser" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);

export default ProductDetails;
