import React, { ReactNode } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className="pt-16">{children}</main>
        </>
    );
};

export default Layout;