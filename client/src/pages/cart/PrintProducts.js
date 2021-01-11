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
            <div ref={contentRef}>
                <h2 className="text-center">{invoice?.caption}</h2>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ERP CODE</th>
                            <th scope="col">PRODUCT NAME</th>
                            <th scope="col">QUANTITY</th>
                            {/* <th scope="col">PRICE</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr>
                                    <th scope="row">
                                        {product.raw.ERPCODE_CODE}
                                    </th>
                                    <th scope="row">{product.name}</th>
                                    <th scope="row">{product.quantity}</th>
                                    {/* <th scope="row">
                                        {formatNumber(product.price)}
                                    </th> */}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PrintProducts;
