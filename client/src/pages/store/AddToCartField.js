import * as React from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/CartContext';

const AddToCart = ({ source, record = {} }) => {
    const product = {
        name: record.PRODUCTNAME_NAME,
        price: record.PRICER,
        id: record.MTRL,
        raw: record,
    };

    const { addProduct, cartItems, increase } = React.useContext(CartContext);

    const currentItem = cartItems.find((item) => item.id == product.id);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };

    return (
        <div className="px-2">
            {isInCart(product) && (
                <div onClick={() => increase(product)} className="btn  d-flex">
                    <i className="fa fa-cart-plus fa-2x mr-2" />
                    <span
                        className="badge badge-danger justify-content-center align-items-center d-flex"
                        style={{ width: 30, height: 30, borderRadius: 15 }}
                    >
                        {currentItem?.quantity}
                    </span>
                </div>
            )}

            {!isInCart(product) && (
                <div
                    onClick={() => addProduct(product)}
                    className="btn  d-flex"
                >
                    <i className="fa fa-cart-plus fa-2x mr-2" />
                </div>
            )}
        </div>
    );
};

AddToCart.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
};

export default AddToCart;
