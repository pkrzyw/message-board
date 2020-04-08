import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="w-8/12 mx-auto">
            {children}
        </div>
    );
}

export default Layout;