import React, { createContext, useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import { useApi } from '../hooks/useApi';
import { dummyProducts } from '../services/dummy';
export const ProductsContext = createContext();

const PAGE_SIZE = 100;

const ProductsContextProvider = ({ children }) => {
    const { request, error, data, loading } = useApi(getProducts);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const goToPage = (pageNumber) => {
        setPage(pageNumber);
        request(page, PAGE_SIZE);
    };

    const previousPage = () => {
        if (page == 1) return;
        request(page - 1, PAGE_SIZE, query);
        setPage(page - 1);
    };
    const nextPage = () => {
        console.log('Fired');
        // if (page * size <= data.total / size) return;
        request(page + 1, PAGE_SIZE, query);
        setPage(page + 1);
    };

    useEffect(() => {
        request(page, PAGE_SIZE, '');
    }, []);

    const handleSearchSubmit = () => {
        if (query.length === 0) return data || [];
        setPage(1);
        request(1, PAGE_SIZE, query);
    };

    const handleClearQuery = () => {
        setQuery('');
        setPage(1);
        request(1, PAGE_SIZE, '');
    };

    if (loading || error || data?.length === 0)
        return (
            <div
                style={{ height: '70vh' }}
                className="row justify-content-center align-items-center"
            >
                <div className="col-md-6">
                    <h3 className="text-center text-muted">
                        {loading
                            ? 'Please wait a moment...'
                            : error
                            ? ' An error occured will fetching products, Please try to refresh the page'
                            : data?.total === 0
                            ? 'Not products found'
                            : ''}
                    </h3>
                </div>
            </div>
        );

    return (
        <ProductsContext.Provider
            value={{
                products: data?.data || [],
                total: data?.total || 1,
                goToPage,
                previousPage,
                nextPage,
                page,
                numberOfPages: Math.ceil(data?.total / PAGE_SIZE),
                query,
                handleQueryChange: setQuery,
                handleClearQuery,
                handleSearchSubmit
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
