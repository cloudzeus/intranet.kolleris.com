import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import { CartContext } from '../../contexts/CartContext';
import { CartIcon } from '../icons';
import styles from './header.module.scss';

const Header = () => {
    const { logOut, user } = useContext(authContext);

    const { itemCount } = useContext(CartContext);

    return (
        <header className={styles.header}>
            <h3 className="d-inline text-white">Kolleris</h3>
            <Link to="/">Store</Link>
            {/* <Link to="/about">About</Link> */}
            <Link to="/cart/1/show" className="text-white">
                {' '}
                <CartIcon /> Cart ({itemCount})
            </Link>
            <button onClick={logOut} className="btn btn-link text-white">
                {' '}
                {user?.email} - Logout{' '}
            </button>
        </header>
    );
};

export default Header;
