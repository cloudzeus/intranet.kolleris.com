import { Badge } from '@material-ui/core';
import React, { useContext } from 'react';
import { TopToolbar } from 'react-admin';
import { Link } from 'react-router-dom';
import { CartIcon } from '../../components/icons';
import { CartContext } from '../../contexts/CartContext';

const ProductsToolBar = (props) => {
    const { itemCount } = useContext(CartContext);

    return (
        <TopToolbar {...props}>
            <Link to="/cart/1/show" className="">
                <Badge badgeContent={itemCount} color="error">
                    <h4>
                        <i className="fa fa-shopping-cart" /> Cart
                    </h4>
                </Badge>
            </Link>
        </TopToolbar>
    );
};

export default ProductsToolBar;
