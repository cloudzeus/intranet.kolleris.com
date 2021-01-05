import React from 'react';
import { formatNumber } from '../../helpers/utils';
import ReactToPrint from 'react-to-print';

const PrintProducts = ({ products, invoice }) => {
    const contentRef = React.createRef();

    return (
        <div>
            <ReactToPrint
                trigger={() => (
                    <button className="btn btn-primary ">Print Invoice</button>
                )}
                content={() => contentRef.current}
            />
            <table class="table table-bordered" ref={contentRef}>
                <thead>
                    <tr>
                        <th colSpan={4} scope="col">
                            Caption : {invoice?.caption}
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">EAN CODE</th>
                        <th scope="col">PRODUCT NAME</th>
                        <th scope="col">QUANTITY</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr>
                                <th scope="row">{product.raw.EANCODE}</th>
                                <th scope="row">{product.name}</th>
                                <th scope="row">{product.quantity}</th>
                                <th scope="row">
                                    {formatNumber(product.price)}
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PrintProducts;
