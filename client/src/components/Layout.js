import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import { Helmet } from 'react-helmet-async';

import 'bootswatch/dist/lux/bootstrap.css';

const Layout = ({ title, description, children }) => {
    return (
        <>
            <Helmet>
                <title>
                    {title
                        ? title + ' - Kolleris Shopping Cart'
                        : 'Kolleris Shopping Cart'}
                </title>
                <meta
                    name="description"
                    content={description || 'Kolleric Shopping Cart'}
                />
            </Helmet>
            {/* <Header /> */}
            <main className="">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
