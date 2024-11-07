import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'

const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Root;