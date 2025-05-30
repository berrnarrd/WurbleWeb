'use client';

import React, { ReactNode } from 'react';
import CTABanner from './Ctabanner';
import Navbar from './Navbar';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <CTABanner />
            <Navbar />
            <main className="pt-28">{children}</main> {/* Spacing for banner + navbar */}
        </>
    );
};

export default Layout;