import React from "react";
import "./footer.scss"
import RightIcon from "../../assets/logo/RightIcon.svg"


export default function Footer() {
    return (
        <div className="footer-section">
            <div className="container3">
                <div className="Footer-grid">
                    <div className="Footer-gridItems">
                        <h4>
                            Contact <br />
                            us.
                        </h4>
                    </div>
                    <div className="Footer-gridItems">
                        <div className="Footer-twoColGrid">
                            <div>
                                <p>Navigation</p>
                                <a>Company</a>
                                <a>Products</a>
                                <a>Services</a>
                                <a>Achievements & certificates</a>
                                <a>Partners</a>
                                <a>Careers</a>
                                <a>Gallery</a>
                            </div>
                            <div>
                                <p>Social Media</p>
                                <a>Facebook</a>
                                <a>LinkedIn</a>
                                <a>YouTube</a>
                                <a>Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className="Footer-gridItems">
                        <div className="Footer-officeinformation">
                            <h5>Corporate Office</h5>
                            <div className="Footer-social">
                                <span>
                                    Phone:
                                    <a>   undefined</a>
                                </span>
                                <span>
                                    Fax:
                                    <a></a>
                                </span>
                                <span>
                                    Mail:
                                    <a></a>
                                </span>
                            </div>
                        </div>
                        <div className="Footer-findContact">
                            <button>
                                <span>Find your local contact</span>
                                <img src={RightIcon} alt="RightIcon" />
                                <div>
                                    {/* <img src={RightIcon} alt="RightIcon" /> */}
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="Footer-gridItems">
                        <div className="Footer-talkSection">
                            <p>Lets talk!</p>
                        </div>
                        <div className="Footer-writeToUs">
                            <button>
                                <span>Write to us</span>
                                <img src={RightIcon} alt="RightIcon" />
                                <div>
                                    <img src={RightIcon} alt="RightIcon" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}