import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer-head">
                <div className="row">
                    <div className="col-12 col-md-10 mx-auto col-lg-4 text-start text-md-center text-lg-start mb-3 mb-lg-0">
                        <h5 className="column-title">
                            Newsletter
                        </h5>
                        <p className="column-desc">
                            Get now free 20% discount for all products on your first order!
                        </p>
                        <form action="" className='email-form'>
                            <input name='email' type="text" placeholder='Email address' />
                            <button className='slider-btn'>Sign Up</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-5 col-lg-3 mb-3 mb-lg-0">
                        <h5 className="column-title">
                            Store Location
                        </h5>
                        <p className="column-desc">
                            9066 Green Lake Drive Chevy
                            Chase, MD 20815
                        </p>
                        <a href="#" className="tel-button">
                            <i className="fas fa-headset"></i>
                            (97)-020-13-43
                        </a>
                    </div>
                    <div className="col-12 col-md-7 col-lg-5 text-start text-md-end mb-3 mb-lg-0">
                        <h5 className="column-title">
                            Follow us
                        </h5>
                        <div className="messengers-payment-links mb-4">
                            <a href="#" className="messenger-link">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="messenger-link">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="messenger-link">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <h5 className="column-title">
                            Accept Payment
                        </h5>
                        <div className="messengers-payment-links">
                            <a href="#" className='payment-link'>
                                <i className="fab fa-cc-mastercard"></i>
                            </a>
                            <a href="#" className='payment-link'>
                                <i className="fab fa-cc-paypal"></i>
                            </a>
                            <a href="#" className='payment-link'>
                                <i className="fab fa-cc-visa"></i>
                            </a>
                            <a href="#" className='payment-link'>
                                <i className="fab fa-cc-amex"></i>
                            </a>
                            <a href="#" className='payment-link'>
                                <i className="fab fa-cc-mastercard"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-body">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-2 order-1 order-lg-0 mb-3 mb-lg-0">
                        <h4 className='column-title-green'>Information</h4>
                        <ul className='ul-menu-list'>
                            <li>
                                <a href="#" className='menu-list-link'>About Us</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Blog</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Check Out</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Contact</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 order-2 order-lg-1 mb-3 mb-lg-0">
                        <h4 className='column-title-green'>My Account</h4>
                        <ul className='ul-menu-list'>
                            <li>
                                <a href="#" className='menu-list-link'>My Account</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Contact</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Shopping Cart</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Shop</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 order-3 order-lg-2 mb-3 mb-lg-0">
                        <h4 className='column-title-green'>Categories</h4>
                        <ul className='ul-menu-list'>
                            <li>
                                <a href="#" className='menu-list-link'>Fruits & Vegetables</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'> Dairy Products</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Package Foods</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'> Beverage</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'> Health & Wellness</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 col-lg-2 order-4 order-lg-3 mb-3 mb-lg-0">
                        <h4 className='column-title-green'>Style Advisor</h4>
                        <ul className='ul-menu-list'>
                            <li>
                                <a href="#" className='menu-list-link'>Your Account</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Information</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Addresses</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Discount</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Orders History</a>
                            </li>
                            <li>
                                <a href="#" className='menu-list-link'>Orders Tracking</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-8 col-lg-4 order-0 order-lg-4 mb-3 mb-lg-0">
                        <div className="footer-body-ending text-start text-lg-end">
                            <a href="index.html" className="logo">
                                <img src="images/logo.svg" alt="" />
                            </a>
                            <a href="#" className='support-email column-title'>
                                Support@ecoliveorganicstore.com
                            </a>
                            <p className='footer-text-p'>
                                Monday – Saturday: 8:00 am – 4:00pm
                            </p>
                            <p className='footer-text-p'>
                                Sunday: 9:00 am – 5:00pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-end row">
                <p className="footer-text-p col-12 col-md-6">
                    Copyright © 2022 <a href="#">Nimadur</a>. All Rights Reserved.
                </p>
                <p className="footer-text-p col-12 col-md-6 text-start text-md-end">
                    Created by <a href="https://itlive.uz">IT-Live</a>.
                </p>
            </div>
        </footer>
    )
}

export default Footer