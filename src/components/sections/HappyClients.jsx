import Slider from "react-slick";
import React, { Component } from 'react'

export class CommentSlider extends Component {
    render() {
        const settings = {
            dots: false,
            navs: false,
            infinite: true,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            margin: 10,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <>
                <Slider {...settings}>
                    <div className="comments-box">
                        <div className="box-fragment pe-5">
                            <img className="author-image" src="images/comment_author.png" alt="comment_author" />
                            <p className="comment-text">
                                “Wanted to drop a line to say how totally amazing your products are. I got some fresh honey and just eat it straight out the jar. Definitely will be getting more. Keep on loving' your job.”
                            </p>
                            <div className="author-name_star">
                                <div className="comment-stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h6 className="comment-authorname">
                                    <a href="#" className="name">John Doe</a>
                                    <span className="job">Web developer</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="comments-box">
                        <div className="box-fragment pe-5">
                            <img className="author-image" src="images/comment_author2.png" alt="comment_author" />
                            <p className="comment-text">
                                “Lorem ipsum dolor to drop a line to say how totally amazing your products are. I got some fresh honey and just eat it straight out the jar. Definitely will be getting more. Keep on loving' your job.”
                            </p>
                            <div className="author-name_star">
                                <div className="comment-stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h6 className="comment-authorname">
                                    <a href="#" className="name">Jovik Mazgu</a>
                                    <span className="job">Economist</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="comments-box">
                        <div className="box-fragment pe-5">
                            <img className="author-image" src="images/comment_author.png" alt="comment_author" />
                            <p className="comment-text">
                                “Wanted to drop a line to say how totally amazing your products are. I got some fresh honey and just eat it straight out the jar. Definitely will be getting more. Keep on loving' your job.”
                            </p>
                            <div className="author-name_star">
                                <div className="comment-stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h6 className="comment-authorname">
                                    <a href="#" className="name">John Doe</a>
                                    <span className="job">Web developer</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="comments-box">
                        <div className="box-fragment pe-5">
                            <img className="author-image" src="images/comment_author.png" alt="comment_author" />
                            <p className="comment-text">
                                “Wanted to drop a line to say how totally amazing your products are. I got some fresh honey and just eat it straight out the jar. Definitely will be getting more. Keep on loving' your job.”
                            </p>
                            <div className="author-name_star">
                                <div className="comment-stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h6 className="comment-authorname">
                                    <a href="#" className="name">John Doe</a>
                                    <span className="job">Web developer</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </Slider>
            </>
        )
    }
}






function HappyClients() {
    return (
        <section className="happy-clients">
            <div className="happy-comments row">
                <div className="col-12 col-md-3">
                    <h2 className="section-title">
                        <i className="fad fa-comments-alt"></i>
                        Here's what our happy clients are saying
                    </h2>
                </div>
                <div className="comments-parent col-12 col-md-9 px-3 px-md-5">
                    <CommentSlider />
                </div>
            </div>
            <div className="happy-trend">
                <div className="yellow-images">
                    <img src="images/trend_yellowbg.png" alt="trend_yellowbg" />
                    <img src="images/trend_yellowimg.png" alt="trend_yellowimg" />
                </div>
                <div className="trend-content col-12 col-md-6 col-lg-3 mx-auto text-center">
                    <h2 className="reklama-title">
                        Organic Only
                    </h2>
                    <p className="reklama-desc">
                        We supply hight quality organic product
                    </p>
                    <p className="simple-text">
                        Eius causae omittantur nec id, consulatu reformidans at nam, deleniti inciderint intellegebat ex ius. Ne delectus voluptaria vituperata qui. In elitr congue est, in nam quis brute menandri.
                    </p>
                    <button className="slider-btn">
                        Hozir sotib oling!
                    </button>
                </div>
                <div className="pink-images">
                    <img src="images/trend_pinkbg.png" alt="trend_yellowbg" />
                    <img src="images/trend_pinkimg.png" alt="trend_pinkimg" />
                </div>
            </div>
        </section>
    )
}

export default HappyClients