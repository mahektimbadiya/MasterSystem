import React from "react";
import "./heroSection.scss"
import WaveIcon from "../../../assets/logo/WaveIcon.svg"
import RightIcon from "../../../assets/logo/RightIcon.svg"
import WhiteIcon from "../../../assets/logo/WhiteIcon.svg"
import ProductsImage from "../../../assets/images/Products-new.png"

export default function HeroSection() {
    return (
        <div className="hero-banner">
            <div className="container">
                <div className="hero-banner-grid">
                    <div className="hero-banner-griditems">
                        <div className="hero-banner-heading">
                            <h2>
                                <span>Anchored in </span>
                                excellence,
                                <span> Sailing towards </span>
                                success.
                            </h2>
                        </div>
                        <div className="HeroBanner-waveicon">
                            <img src={WaveIcon} alt="WaveIcon" />
                        </div>
                        <div className="HeroBanner-content">
                            <p>
                                Master Systems is a leading provider of comprehensive maritime solutions, empowering the industry with expertise, innovation, and cutting-edge technology. With a customer-centric approach, we serve ship management companies, owners, superintendents, captains, and ports worldwide. Our commitment to excellence drives us to deliver customized, reliable, and efficient services for the maritime sector' s diverse needs.
                            </p>
                        </div>
                        <div className="HeroBanner-readmoreButton">
                            <button>
                                <div className=""></div>
                                <span>Read more</span>
                                <img src={RightIcon} alt="RightIcon" />
                            </button>
                        </div>
                    </div>
                    <div className="hero-banner-griditems">
                        <div className="HeroBanner-redbox">
                            <div className="HeroBanner-icon">
                                <img src={WhiteIcon} alt="WhiteIcon" />
                            </div>
                            <div className="HeroBanner-text">
                                <h1>Who we are</h1>
                            </div>
                            <div className="HeroBanner-line"></div>
                            <div className="HeroBanner-subgrid">
                                <div className="HeroBanner-subgriditems">
                                    <span>We cater to</span>
                                    <p>
                                        Global ship management companies, Ship owners, Superintendents, Captains, Dry docks.
                                    </p>
                                </div>
                                <div className="HeroBanner-subgriditems">
                                    <span>We offer</span>
                                    <p>
                                        Comprehensive maritime solutions, Specializing in communication, Navigation technologies, Electrical automation, Gas detection instrumentation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="HeroBanner-cardgrid">
                            <div className="HeroBanner-cardgriditems">
                                <div className="HeroBanner-lightdiv"></div>
                                <div className="HeroBanner-opacity"></div>
                                <img src={ProductsImage} alt="ProductsImage" />
                                <div className="HeroBanner-contnetAlignment">
                                    <div className="HeroBanner-iconright">
                                        <img className="WhiteIcon" src={WhiteIcon} alt="WhiteIcon" />
                                    </div>
                                    <h4>Products</h4>
                                </div>
                                <div className="HeroBanner-bottomAlignment">
                                    <div className="HeroBanner-divider"></div>
                                    <p>
                                        Discover a world of possibilities. Dive into our wide range of innovative products, designed to elevate your maritime operations. Let's explore together!
                                    </p>
                                </div>
                            </div>
                            <div className="HeroBanner-cardgriditems">
                                <div className="HeroBanner-lightdiv"></div>
                                <div className="HeroBanner-opacity"></div>
                                <img src={ProductsImage} alt="ProductsImage" />
                                <div className="HeroBanner-contnetAlignment">
                                    <div className="HeroBanner-iconright">
                                        <img className="WhiteIcon" src={WhiteIcon} alt="WhiteIcon" />
                                    </div>
                                    <h4>Products</h4>
                                </div>
                                <div className="HeroBanner-bottomAlignment">
                                    <div className="HeroBanner-divider"></div>
                                    <p>
                                        Discover a world of possibilities. Dive into our wide range of innovative products, designed to elevate your maritime operations. Let's explore together!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}