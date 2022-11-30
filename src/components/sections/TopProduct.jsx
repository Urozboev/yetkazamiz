import { useState } from "react";

function TopProduct() {
    return (
        <section className="popular-section">
            <h2 className="section-title text-center">Top Product</h2>
            <div className="d-flex justify-content-center mb-5 product-category-btns">
                <button className="product-type-btn active">All product</button>
                <button className="product-type-btn">Grocery Deals</button>
                <button className="product-type-btn">Fish & Seafood</button>
                <button className="product-type-btn">Meat Seafood</button>
                <button className="product-type-btn">Produce</button>
                <button className="product-type-btn">Dairy</button>
            </div>


            <div className="top-products-list">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <img src="images/bodring.png" alt="image" />
                                    <span className="badge bg-danger text-white rounded-pill position-absolute start-0 top-0">-22%</span>
                                    <div className="product-actions">
                                        <button>
                                            <i className="fal fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-eye"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-repeat"></i>
                                        </button>
                                    </div>
                                </a>

                                <a href="#" className="product-type">
                                    Fruits & Vegatables
                                </a>

                                <a href="#" className="product-name">
                                    Awesome Wool Lamp
                                </a>

                                <p className="product-measure">
                                    Unit: <span>G</span>
                                </p>

                                <p className="product-price">
                                    $16.33 <span>$39.92</span>
                                </p>

                                <div className="product-count">
                                    <div className="count">
                                        <button className="minus">
                                            <i className="fal fa-minus"></i>
                                        </button>
                                        <span className="count-val">1</span>
                                        <button className="plus">
                                            <i className="fal fa-plus"></i>
                                        </button>
                                    </div>

                                    <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <img src="images/bodring.png" alt="image" />
                                    <span className="badge bg-danger text-white rounded-pill position-absolute start-0 top-0">-22%</span>
                                    <div className="product-actions">
                                        <button>
                                            <i className="fal fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-eye"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-repeat"></i>
                                        </button>
                                    </div>
                                </a>

                                <a href="#" className="product-type">
                                    Fruits & Vegatables
                                </a>

                                <a href="#" className="product-name">
                                    Awesome Wool Lamp
                                </a>

                                <p className="product-measure">
                                    Unit: <span>G</span>
                                </p>

                                <p className="product-price">
                                    $16.33 <span>$39.92</span>
                                </p>

                                <div className="product-count">
                                    <div className="count">
                                        <button className="minus">
                                            <i className="fal fa-minus"></i>
                                        </button>
                                        <span className="count-val">1</span>
                                        <button className="plus">
                                            <i className="fal fa-plus"></i>
                                        </button>
                                    </div>

                                    <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <img src="images/bodring.png" alt="image" />
                                    <span className="badge bg-danger text-white rounded-pill position-absolute start-0 top-0">-22%</span>
                                    <div className="product-actions">
                                        <button>
                                            <i className="fal fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-eye"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-repeat"></i>
                                        </button>
                                    </div>
                                </a>

                                <a href="#" className="product-type">
                                    Fruits & Vegatables
                                </a>

                                <a href="#" className="product-name">
                                    Awesome Wool Lamp
                                </a>

                                <p className="product-measure">
                                    Unit: <span>G</span>
                                </p>

                                <p className="product-price">
                                    $16.33 <span>$39.92</span>
                                </p>

                                <div className="product-count">
                                    <div className="count">
                                        <button className="minus">
                                            <i className="fal fa-minus"></i>
                                        </button>
                                        <span className="count-val">1</span>
                                        <button className="plus">
                                            <i className="fal fa-plus"></i>
                                        </button>
                                    </div>

                                    <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <img src="images/bodring.png" alt="image" />
                                    <span className="badge bg-danger text-white rounded-pill position-absolute start-0 top-0">-22%</span>
                                    <div className="product-actions">
                                        <button>
                                            <i className="fal fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-eye"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-repeat"></i>
                                        </button>
                                    </div>
                                </a>

                                <a href="#" className="product-type">
                                    Fruits & Vegatables
                                </a>

                                <a href="#" className="product-name">
                                    Awesome Wool Lamp
                                </a>

                                <p className="product-measure">
                                    Unit: <span>G</span>
                                </p>

                                <p className="product-price">
                                    $16.33 <span>$39.92</span>
                                </p>

                                <div className="product-count">
                                    <div className="count">
                                        <button className="minus">
                                            <i className="fal fa-minus"></i>
                                        </button>
                                        <span className="count-val">1</span>
                                        <button className="plus">
                                            <i className="fal fa-plus"></i>
                                        </button>
                                    </div>

                                    <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <img src="images/bodring.png" alt="image" />
                                    <span className="badge bg-danger text-white rounded-pill position-absolute start-0 top-0">-22%</span>
                                    <div className="product-actions">
                                        <button>
                                            <i className="fal fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-eye"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-repeat"></i>
                                        </button>
                                    </div>
                                </a>

                                <a href="#" className="product-type">
                                    Fruits & Vegatables
                                </a>

                                <a href="#" className="product-name">
                                    Awesome Wool Lamp
                                </a>

                                <p className="product-measure">
                                    Unit: <span>G</span>
                                </p>

                                <p className="product-price">
                                    $16.33 <span>$39.92</span>
                                </p>

                                <div className="product-count">
                                    <div className="count">
                                        <button className="minus">
                                            <i className="fal fa-minus"></i>
                                        </button>
                                        <span className="count-val">1</span>
                                        <button className="plus">
                                            <i className="fal fa-plus"></i>
                                        </button>
                                    </div>

                                    <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <img src="images/bodring.png" alt="image" />
                                    <span className="badge bg-danger text-white rounded-pill position-absolute start-0 top-0">-22%</span>
                                    <div className="product-actions">
                                        <button>
                                            <i className="fal fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-eye"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-repeat"></i>
                                        </button>
                                    </div>
                                </a>

                                <a href="#" className="product-type">
                                    Fruits & Vegatables
                                </a>

                                <a href="#" className="product-name">
                                    Awesome Wool Lamp
                                </a>

                                <p className="product-measure">
                                    Unit: <span>G</span>
                                </p>

                                <p className="product-price">
                                    $16.33 <span>$39.92</span>
                                </p>

                                <div className="product-count">
                                    <div className="count">
                                        <button className="minus">
                                            <i className="fal fa-minus"></i>
                                        </button>
                                        <span className="count-val">1</span>
                                        <button className="plus">
                                            <i className="fal fa-plus"></i>
                                        </button>
                                    </div>

                                    <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <img src="images/bodring.png" alt="image" />
                                    <span className="badge bg-danger text-white rounded-pill position-absolute start-0 top-0">-22%</span>
                                    <div className="product-actions">
                                        <button>
                                            <i className="fal fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-eye"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-repeat"></i>
                                        </button>
                                    </div>
                                </a>

                                <a href="#" className="product-type">
                                    Fruits & Vegatables
                                </a>

                                <a href="#" className="product-name">
                                    Awesome Wool Lamp
                                </a>

                                <p className="product-measure">
                                    Unit: <span>G</span>
                                </p>

                                <p className="product-price">
                                    $16.33 <span>$39.92</span>
                                </p>

                                <div className="product-count">
                                    <div className="count">
                                        <button className="minus">
                                            <i className="fal fa-minus"></i>
                                        </button>
                                        <span className="count-val">1</span>
                                        <button className="plus">
                                            <i className="fal fa-plus"></i>
                                        </button>
                                    </div>

                                    <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <img src="images/bodring.png" alt="image" />
                                    <span className="badge bg-danger text-white rounded-pill position-absolute start-0 top-0">-22%</span>
                                    <div className="product-actions">
                                        <button>
                                            <i className="fal fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-eye"></i>
                                        </button>
                                        <button>
                                            <i className="fal fa-repeat"></i>
                                        </button>
                                    </div>
                                </a>

                                <a href="#" className="product-type">
                                    Fruits & Vegatables
                                </a>

                                <a href="#" className="product-name">
                                    Awesome Wool Lamp
                                </a>

                                <p className="product-measure">
                                    Unit: <span>G</span>
                                </p>

                                <p className="product-price">
                                    $16.33 <span>$39.92</span>
                                </p>

                                <div className="product-count">
                                    <div className="count">
                                        <button className="minus">
                                            <i className="fal fa-minus"></i>
                                        </button>
                                        <span className="count-val">1</span>
                                        <button className="plus">
                                            <i className="fal fa-plus"></i>
                                        </button>
                                    </div>

                                    <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <p className="all-show-txt">
                            Get hands on with our receipe ideas.
                            <a href="#">Shop All Products</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopProduct;