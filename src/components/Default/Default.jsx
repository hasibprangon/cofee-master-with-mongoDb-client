import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Default = () => {
    return (
        <div className='font-rancho-regular'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Default;