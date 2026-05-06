import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='w-full lg:max-w-[1280px] mx-auto px-5'>
            {children}
        </div>
    );
};

export default Container;
