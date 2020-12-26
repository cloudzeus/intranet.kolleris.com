import React from 'react';
import { CreateButton, List, useListContext } from 'react-admin';

const EmptyProducts = () => {
    const { basePath, resource } = useListContext();
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="text-center">No products available</h4>
            </div>
        </div>
    );
};

export default EmptyProducts;
