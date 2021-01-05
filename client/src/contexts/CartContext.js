import React, { createContext, useReducer, useState } from 'react';
import AuthStore from '../api/authStore';
import { checkout } from '../api/products';
import { CartReducer, sumItems } from './CartReducer';
import WarehousePicker from './WarehousePicker';

export const CartContext = createContext();

const storage = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
};

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    const [warehouse, setWarehouse] = useState('');
    const [payload, setPayload] = useState(null);
    const [open, setOpen] = useState(false);

    const increase = (payload) => {
        dispatch({ type: 'INCREASE', payload });
    };

    const decrease = (payload) => {
        dispatch({ type: 'DECREASE', payload });
    };

    const handleClose = () => {
        setWarehouse('');
        setPayload(null);
        setOpen(false);
    };

    const addProduct = (payload) => {
        setPayload(payload);
        setOpen(true);
    };
    const addProductToCart = () => {
        if (warehouse.trim().length === 0) return;
        let _payload = payload;
        _payload.raw.WHOUSE = warehouse;
        // debugger;
        dispatch({ type: 'ADD_ITEM', payload: _payload });
        handleClose();
    };

    const removeProduct = (payload) => {
        dispatch({ type: 'REMOVE_ITEM', payload });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR' });
    };

    const handleCheckout = async () => {
        dispatch({ type: 'CHECKOUT' });
    };

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state,
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
            <WarehousePicker
                handleChange={(event) => setWarehouse(event.target.value || '')}
                open={open}
                handleClose={handleClose}
                handleSubmit={addProductToCart}
                warehouse={warehouse}
            />
        </CartContext.Provider>
    );
};

export default CartContextProvider;
