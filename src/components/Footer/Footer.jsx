import React from 'react';

const Footer = () => {
    return (
        <div className='py-28 px-40'>
            <div className="text-center">
                <h3 className='text-4xl font-bold mb-3'>Gadget Heaven</h3>
                <p className='text-gray-400'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
            <div className="footer text-black ml-40">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </div>
    );
};

export default Footer;