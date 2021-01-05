import { Button, Card, Divider, Modal, Typography } from '@material-ui/core';
import React, { createContext, useState } from 'react';
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [currentProductDetails, setCurrentProductDetails] = useState(null);

    const handleSetCurrentProduct = (product) => {
        setCurrentProductDetails(product);
        setOpen(true);
    };

    return (
        <ProductsContext.Provider
            value={{
                handleSetCurrentProduct,
            }}
        >
            {children}
            <Modal
                open={open}
                onClose={() => {
                    setOpen(false);
                    setCurrentProductDetails(null);
                }}
                className="p-5  justify-content-center d-flex"
                //   container={() => rootRef.current}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Card
                    className="p-5"
                    style={{ width: '60%', overflowY: 'scroll' }}
                >
                    <div className="d-flex justify-content-between">
                        <Typography variant="h4">
                            Product details #{currentProductDetails?.MTRL}
                        </Typography>
                        <Button
                            variant="contained"
                            color="default"
                            onClick={() => {
                                setOpen(false);
                                setCurrentProductDetails(false);
                            }}
                        >
                            Close
                        </Button>
                    </div>
                    <Divider />
                    <div className="mt-4">
                        <h5>Product Name</h5>
                        <p>{currentProductDetails?.PRODUCTNAME_NAME}</p>
                        <h5>EAN CODE</h5>
                        <p>{currentProductDetails?.EANCODE || 'N/A'}</p>
                        <h5>MANUFACTURE CODE </h5>
                        <p>{currentProductDetails?.MANUFACTURECODE || 'N/A'}</p>
                        <h5>VALUE ADDED TAX</h5>
                        <p>{currentProductDetails?.VAT || 'N/A'}</p>
                        <h5>VATNAME</h5>
                        <p>{currentProductDetails?.VATNAME || 'N/A'}</p>
                        <h5>MTR UNIT 1</h5>
                        <p>{currentProductDetails?.MTRUNIT1 || 'N/A'}</p>
                        <h5>MTR UNIT 2</h5>
                        <p>{currentProductDetails?.MTRUNIT2 || 'N/A'}</p>
                        <h5>MTR UNIT3</h5>
                        <p>{currentProductDetails?.MTRUNIT3 || 'N/A'}</p>
                        <h5>MTR CATEGORY </h5>
                        <p>{currentProductDetails?.MTRCATEGORY || 'N/A'}</p>
                        <h5>MTR CATEGORY 1 </h5>
                        <p>{currentProductDetails?.MTRCATEGORY_1 || 'N/A'}</p>
                        <h5>COMMERCIAL CATEGORY NAME </h5>
                        <p>
                            {currentProductDetails?.COMMERCIAL_CATEGORY_NAME ||
                                'N/A'}
                        </p>
                        <h5>MTR GROUP</h5>
                        <p>{currentProductDetails?.MTRGROUP || 'N/A'}</p>
                        <h5>PRICER</h5>
                        <p>{currentProductDetails?.PRICER || 'N/A'}</p>
                        <h5>PRICEW</h5>
                        <p>{currentProductDetails?.PRICEW || 'N/A'}</p>
                    </div>
                </Card>
            </Modal>
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
