import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import styles from './ProductsGrid.module.scss';
import Pagination from '../../components/shared/Pagination';
import SearchProducts from './SearchProducts';

const ProductsGrid = () => {
    const {
        products,
        page,
        previousPage,
        nextPage,
        goToPage,
        numberOfPages,
    } = useContext(ProductsContext);

    return (
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        {' '}
                        {page} of {numberOfPages} page(s)
                    </div>
                </div>
                <div className="col-sm-4">
                    <SearchProducts />
                </div>
            </div>
            <div className={styles.p__grid}>
                {products.map((product) => (
                    <ProductItem
                        key={product.MTRL + 'Product-card'}
                        product={product}
                    />
                ))}
            </div>
            <div className="mt-5 row justify-content-center ">
                <div className="col-2">
                    <Pagination
                        previousPage={previousPage}
                        nextPage={nextPage}
                        goToPage={goToPage}
                        numberOfPages={numberOfPages}
                        page={page}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductsGrid;
