import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

const ShowRecordField = ({ source, record = {} }) => {
    const { handleSetCurrentProduct } = useContext(ProductsContext);
    return (
        <>
            <div className="d-flex align-items-center">
                <i className="fa fa-eye fa-2x text-info" />
                <button
                    onClick={() => handleSetCurrentProduct(record)}
                    className=" btn btn-link pl-2 text-info"
                >
                    <span>Show</span>
                </button>
            </div>
        </>
    );
};

export default ShowRecordField;
