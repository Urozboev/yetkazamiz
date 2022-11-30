import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from "react-slick";

function PopularCategories() {
    const products = useSelector(state => state.products);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1330,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='popular-section'>
            <h2 className="section-title">
                Popular Categories
            </h2>

            <Slider {...settings}>
                {products.map(prod => {
                    return <a
                        href="#"
                        className="popular-box"
                        style={{ background: prod.bg }}
                        key={prod.id}
                    >
                        <h3 className="box-title">{prod.name}</h3>
                        <div className="box-img">
                            <img src={`images/${prod.imgName}`} alt={prod.name} />
                        </div>
                    </a>
                })}
            </Slider>
        </section>
    )
}

export default PopularCategories;