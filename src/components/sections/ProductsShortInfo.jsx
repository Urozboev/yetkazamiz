import React from 'react'
import { useSelector } from 'react-redux'

function ProductsShortInfo() {
    const products = useSelector(state => state.products)
    return (
        <section className='product-short-info'>
            <div className='product-short-info-top'>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <h2 className="section-title">Best Seller</h2>
                        <div className="short-info-box">
                            {products.slice(0, 4).map((product, i) => {
                                return <div className="short-info-card border-bottom" key={product.id}>
                                    <a href="#" className="short-info-card-img">
                                        <img src={`images/${product.imgName}`} alt={product.imgName} />
                                    </a>
                                    <div className="short-info-card-texts">
                                        <a href="#">
                                            {product.name}
                                        </a>
                                        <div className="comment-stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <p className="product-price">
                                            $16.29
                                            <span>$12.12</span>
                                        </p>
                                    </div>
                                    <button className="short-info-card-btn my-btn">
                                        <div className="fal fa-plus"></div>
                                    </button>
                                </div>
                            })}
                            <a href="#" className="short-info-full-btn">
                                Shop All Products
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <h2 className="section-title">Top Product</h2>
                        <div className="short-info-box">
                            {products.slice(0, 4).map((product, i) => {
                                return <div className="short-info-card border-bottom" key={product.id}>
                                    <a href="#" className="short-info-card-img">
                                        <img src={`images/${product.imgName}`} alt={product.imgName} />
                                    </a>
                                    <div className="short-info-card-texts">
                                        <a href="#">
                                            {product.name}
                                        </a>
                                        <div className="comment-stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <p className="product-price">
                                            $16.29
                                            <span>$12.12</span>
                                        </p>
                                    </div>
                                    <button className="short-info-card-btn my-btn">
                                        <div className="fal fa-plus"></div>
                                    </button>
                                </div>
                            })}
                            <a href="#" className="short-info-full-btn">
                                Shop All Products
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-12 mb-5 mb-sm-0 mb-lg-5 mb-3">
                                <a href='#' className="short-info-rek">
                                    <img src="images/rek_bg.jpg" alt="" />
                                    <div className="short-info-rek-texts">
                                        <h3>
                                            Keto Dietat LowestPrice
                                        </h3>
                                        <p>
                                            Fresh Packed to order
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-12">
                                <a href='#' className="short-info-rek">
                                    <img src="images/rek_bg.jpg" alt="" />
                                    <div className="short-info-rek-texts">
                                        <h3>
                                            Keto Dietat LowestPrice
                                        </h3>
                                        <p>
                                            Fresh Packed to order
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-rek-banner">
                <h2 className="section-title">
                    100% Secure delivery without contacting the courier
                </h2>
                <button className='slider-btn'>Shop Now</button>
            </div>
        </section>
    )
}

export default ProductsShortInfo