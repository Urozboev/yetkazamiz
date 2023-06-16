import { Rate } from 'antd'
import React from 'react'
import { Accordion } from 'react-bootstrap'

const RightProductInfo = () => {
  return (
    <>
    <div className="col-lg-8">
        <div className="RightProductInfo">
            <div className="row">
                <div className="col-lg-6">
                    <div className='img-big-product'>
                        <img className='short-info-box product-card-img' src="images/bodring.png" alt="#" />
                    </div>
                    <div className='d-flex img-min-products'>
                        <img className='product-card-img box-min-products' src="images/baqlajon.png" alt="" />
                        <img className='product-card-img box-min-products' src="images/banana.png" alt="" />
                        <img className='product-card-img box-min-products' src="images/candy.png" alt="" />
                        <img className='product-card-img box-min-products' src="images/breakfast.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 info-product">
                    <h1 class="product-title">Incredible Wool Wallet</h1>
                    <div className='d-flex'>
                        <div className="comment-stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p className="comment-stars-link">(5 customer reviews)</p>
                    </div>
                    <p className="product-price">
                        $16.29
                        <span>$12.12</span>
                    </p>
                    <p className='about-product mb-3 mt-3'>Aut sit enim placeat non aut labore dolore. Repudiandae consequatur ut tempora earum. Est reiciendis asperiores sed non ipsam. Veritatis rerum assumenda non enim voluptatem vel perspiciatis autem.</p>
                    <div className="border-bottom">
                        <span className="comment-stars-link">Unit:</span>
                        <span className="value">kg</span>
                    </div>
                    <div className="quantity d-flex border-bottom">
                        <button className="minus">
                            <i className="fal fa-minus"></i>
                        </button>
                        <span className="count-val">1</span>
                        <button className="plus ">
                            <i className="fal fa-plus"></i>
                        </button>
                        <button className="btn btn-warning add-card">
                            <i className="fal fa-shopping-bag"> Add to cart</i>
                        </button>
                    </div>
                    <div>
                        <span className="comment-stars-link">Category:</span>
                        <span className="value">Fruits & Vegetables</span>
                    </div>
                </div>

                <Accordion className='mt-5 mb-5'>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Descriptions</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Additional Information</Accordion.Header>
                      <Accordion.Body>
                        <table class="table table-bordered">
                            <tbody>
                              <tr>
                                <td>Weight</td>
                                <td>114 kg</td>
                              </tr>
                              <tr>
                                <td>Dimensions</td>
                                <td>117 × 109 × 187 cm</td>
                              </tr>
                            </tbody>
                        </table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Reviews(5)</Accordion.Header>
                      <Accordion.Body>
                        <div className="comment_container  mb-5">
                            <div className="comment_info d-flex">
                                <img src="https://www.pinpng.com/pngs/m/75-757378_user-icone-contact-hd-png-download.png" alt="" />
                                <div>
                                    <div className="comment-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>
                                        <strong>Mike Addington </strong>
                                        <time>October 13, 2021</time>
                                    </p>
                                </div>  
                            </div>
                            <p className='comment-text'>Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware</p>
                        </div>
                        <div className="comment_container  mb-5">
                            <div className="comment_info d-flex">
                                <img src="https://www.pinpng.com/pngs/m/75-757378_user-icone-contact-hd-png-download.png" alt="" />
                                <div>
                                    <div className="comment-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>
                                        <strong>Mike Addington </strong>
                                        <time>October 13, 2021</time>
                                    </p>
                                </div>  
                            </div>
                            <p className='comment-text'>Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware</p>
                        </div>
                        <div className="comment_container  mb-5">
                            <div className="comment_info d-flex">
                                <img src="https://www.pinpng.com/pngs/m/75-757378_user-icone-contact-hd-png-download.png" alt="" />
                                <div>
                                    <div className="comment-stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <p>
                                        <strong>Mike Addington </strong>
                                        <time>October 13, 2021</time>
                                    </p>
                                </div>  
                            </div>
                            <p className='comment-text'>Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware</p>
                        </div>
                        
                        <form action="" method="post" role="form" className="php-email-form">
                            <div class="form-group">
                            <p className="comment-notes comment-text">Your email address will not be published. Required fields are marked *</p>
                                <label className='comment-text' for="rating">Your rating *</label>
                                <Rate />
                                <textarea className="form-control mb-4" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Your review *"></textarea>
                                <div className='d-flex'>
                                    <input type="text" name="name" className="form-control mb-4 m-2" id="name" placeholder="Name *" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                    <input type="email" className="form-control mb-4 m-2" name="email" id="email" placeholder="Email *" data-rule="email" data-msg="Please enter a valid email" />
                                </div>
                            </div>
                            <p class="comment-form-cookies-consent">
                                <input id="comment-cookies-consent" name="comment-cookies-consent" type="checkbox" value="yes"/>
                                <label className='checkbox_cookies' for="comment-cookies-consent">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </p>
                            <button type="button" className="btn btn-warning">Submit</button>
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
                <h2 className="section-title text-center">Related Product</h2>
                <div className="col-12 col-sm-6 col-lg-4">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <a href="/product"><img src="images/bodring.png" alt="image" /></a>
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

                                <a href="/product" className="product-name">
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
                                        <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <a href="/product"><img src="images/bodring.png" alt="image" /></a>
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

                                <a href="/product" className="product-name">
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
                                        <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                        </button>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                        <div className="product-card">
                            <div className="product-card-block">
                                <a href="#" className="product-card-img">
                                    <a href="/product"><img src="images/bodring.png" alt="image" /></a>
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

                                <a href="/product" className="product-name">
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
                                        <button className="my-btn add-card">
                                        <i className="fal fa-shopping-bag"></i>
                                        </button>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default RightProductInfo