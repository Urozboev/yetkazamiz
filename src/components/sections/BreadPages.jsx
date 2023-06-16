import React from 'react'

const BreadPages = () => {
  return (
    <>
        <div className="BreadPages d-flex">
            <div className="BreadCrumb">
                <a href="/">Home Page</a>
                <i className="fas fa-chevron-right"></i>
                <a href="/">Shop</a>
                <i className="fas fa-chevron-right"></i>
                <a href="/">Fruit and Vegetables</a>
                <i className="fas fa-chevron-right"></i>
                <a className='active' href="/">Fantastic Granite Car</a>
            </div>
            
        </div>
    </>
  )
}

export default BreadPages