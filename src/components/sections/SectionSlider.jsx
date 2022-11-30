import Slider from "react-slick";

export default () => {
    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <section className="product-images-slider">
            <Slider {...settings} >
                <div
                    className="images-slider-item"
                >
                    <img src="images/slider1.jpg" alt="Image" className="images-slider-img" />
                </div>
                <div
                    className="images-slider-item"
                >
                    <img src="images/slider2.jpg" alt="Image" className="images-slider-img" />
                </div>
                <div
                    className="images-slider-item"
                >
                    <img src="images/slider3.jpg" alt="Image" className="images-slider-img" />
                </div>
                <div
                    className="images-slider-item"
                >
                    <img src="images/slider4.jpg" alt="Image" className="images-slider-img" />
                </div>
            </Slider>
        </section>
    );
};
