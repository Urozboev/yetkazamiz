import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const LeftAllProducts = () => {
    const products = useSelector(state => state.products)
  return (
    <>
        <div className="col-lg-4">
            <div className="LeftAllProducts short-info-box">
                <div className="widget border-bottom">
                    <span className="widget-title">Categories</span>
                    <ul className="product-categories">
                        <li className=""><a href="/">Beverages</a></li>
                        <li className=""><a href="/">Dairy Bread & Eggs</a></li>
                        <li className=""><a href="/">Fruits & Vegetables</a></li>
                        <li className=""><a href="/">Grocery & Staples</a></li>
                        <li className=""><a href="/">Health & Wellness</a></li>
                        <li className=""><a href="/">Leafy Green</a></li>
                        <li className=""><a href="/">Package Foods</a></li>
                        <li className=""><a href="/">Uncategorized</a></li>
                    </ul>
                </div>
                <div className="widget border-bottom">
                    <span className="widget-title">Products</span>
                    <ul className="product-categories">
                        {products.slice(0, 4).map((product, i) => {
                            return <div className="short-info-card" key={product.id}>
                                <a href="/" className="short-info-card-img">
                                    <img src={`images/${product.imgName}`} alt={product.imgName} />
                                </a>
                                <div className="short-info-card-texts">
                                    <a href="/">
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
                            </div>
                        })}
                        
                    </ul>
                </div>
                <div className="widget">
                    <span className="widget-title">Tags</span>
                        <div className='tags'>
                            <Button className='short-info-box btn' variant="outline-success">fruits</Button>{'  '}
                            <Button className='short-info-box btn' variant="outline-success">healthy</Button>{' '}
                            <Button className='short-info-box btn' variant="outline-success">tomatto</Button>{' '}
                            <Button className='short-info-box btn' variant="outline-success">meat</Button>{' '}
                            <Button className='short-info-box btn' variant="outline-success">organic</Button>{' '}
                            <Button className='short-info-box btn' variant="outline-success">vegetables</Button>{' '}
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LeftAllProducts