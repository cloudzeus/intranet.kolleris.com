import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

const SearchProducts = () => {
    const {
        query,
        handleSearchSubmit,
        handleQueryChange,
        handleClearQuery,
    } = useContext(ProductsContext);
    return (
        <div className="form-group form-row">
            <div className="col-6">
                <input
                    type="text"
                    value={query}
                    onChange={(event) => handleQueryChange(event.target.value)}
                    placeholder="Search product"
                    className="form-control"
                    id=""
                />
            </div>
            <div className="col-6 d-flex">
                <button
                    onClick={() => handleSearchSubmit()}
                    className="btn btn-dark"
                >
                    Search
                </button>
                <button onClick={handleClearQuery} className="btn btn-clear">
                    clear
                </button>
            </div>
        </div>
    );
};

export default SearchProducts;
