import React from 'react'
import Header from '../header/Header'
import Footer from '../sections/Footer'
import BreadPages from '../sections/BreadPages'
import LeftAllProducts from '../sections/LeftAllProducts'
import RightProductInfo from '../sections/RightProductInfo'

const ProductInfo = () => {
  return (
    <>
       <Header />
       {/* <ConnectPages /> */}
       <BreadPages />
      <div className="container">
        <div className="row">
          <LeftAllProducts />
          <RightProductInfo />
        </div>
      </div>
       <Footer />
    </>
  )
}

export default ProductInfo