import * as React from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/CartContext';

const AddToCart = ({ source, record = {} }) => {
    let product = record;

    product = {
        name: product.PRODUCTNAME_NAME,
        price: product.PRICER,
        id: product.MTRL,
    };

    const { addProduct, cartItems, increase } = React.useContext(CartContext);

    const isInCart = (product) => {
        return !!cartItems.find((item) => item.id === product.id);
    };

    return (
        <div className="px-2">
            {isInCart(product) && (
                <button
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm"
                >
                    Add more
                </button>
            )}

            {!isInCart(product) && (
                <button
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm"
                >
                    Add to cart
                </button>
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
