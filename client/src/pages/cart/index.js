import React, { useContext, useEffect, useState } from 'react';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from 'react-router-dom';
import { Show, SimpleShowLayout } from 'react-admin';
import AuthStore from '../../api/authStore';
import { checkout as checkoutApi } from '../../api/products';
import { useApi } from '../../hooks/useApi';
import PrintProducts from './PrintProducts';

const Cart = (props) => {
    const [invoiceItems, setInvoiceItems] = useState([]);
    const {
        total,
        cartItems,
        itemCount,
        clearCart,
        checkout,
        handleCheckout,
    } = useContext(CartContext);

    useEffect(() => {
        if (!checkout) setInvoiceItems(cartItems);
        return () => {};
    }, [cartItems]);

    const { request, loading, error, data: invoice } = useApi(checkoutApi);

    const checkoutProducts = async () => {
        const client = await AuthStore.getClientId();

        const payload = {
            CLIENTID: client.clientID,
            APPID: 1001,
            SERVICE: 'SetData',
            OBJECT: 'SALDOC',
            KEY: '',
            FORM: '',
            DATA: {
                SALDOC: [
                    {
                        SERIES: '7001',
                        TRDR: '11971',
                        PAYMENT: '1003',
                    },
                ],

                ITELINES: cartItems.map((item, idx) => {
                    return {
                        ...item.raw,
                        LINENUM: 9000002 + idx,
                        QTY1: item.quantity,
                        PRICE: parseFloat(item.raw.PRICER),
                    };
                }),
                SRVLINES: [],
            },
        };

        await request(payload);
        handleCheckout();
    };

    return (
        <Show {...props} title="Cart" description="This is the Cart page">
            <SimpleShowLayout>
                <div className="text-center mt-5">
                    <h1>Cart</h1>
                    <p>This is the Cart Page.</p>
                </div>
                <div className="row">
                    <Link to="/products" className="btn ml-4 btn-outline-dark">
                        {/* <h4> */}
                        <i className="fa fa-shopping-basket" /> Back to products
                        {/* </h4> */}
                    </Link>
                </div>
                <div className="row no-gutters justify-content-center">
                    {cartItems.length > 0 ? (
                        <div className="col-sm-9 p-3">
                            <CartProducts />
                        </div>
                    ) : (
                        <div className="p-3 text-center text-muted">
                            Your cart is empty
                        </div>
                    )}

                    {checkout && (
                        <div className="col-sm-12 p-3">
                            <PrintProducts
                                products={invoiceItems}
                                invoice={invoice}
                            />
                            <div className="p-3 text-center text-success">
                                <p>Checkout successful</p>
                                <Link
                                    to="/products"
                                    className="btn btn-outline-success btn-sm"
                                >
                                    BUY MORE
                                </Link>
                            </div>
                        </div>
                    )}
                    {cartItems.length > 0 && (
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">
                                    {formatNumber(total)}
                                </h3>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary mb-2"
                                        onClick={checkoutProducts}
                                    >
                                        {loading
                                            ? 'Please wait...'
                                            : 'CHECKOUT'}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outlineprimary btn-sm"
                                        onClick={clearCart}
                                    >
                                        CLEAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </SimpleShowLayout>
        </Show>
    );
};

export default Cart;
