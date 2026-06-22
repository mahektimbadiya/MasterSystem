import React from "react";
import "./homeHeader.scss"
import Logo from "../../assets/logo/black-logo.png"
import { Menu } from "lucide-react";

export default function HomeHeader() {
    return (
        <div className="home-header-section">
            <div className="container">
                <div className="home-header-alignment">
                    <div className="home-header-logo">
                        <a>
                            <img src={Logo} alt="Logo" />
                        </a>
                    </div>
                    <div className="home-header-menu">
                        <div className="home-header-menu-alignment">
                            <a>
                                <span>Company</span>
                            </a>
                            <div className="home-header-menu-dropdown">
                                <div className="container7">
                                    <div className="home-header-dropdown-hoghtbox">
                                        <div className="home-header-dropdowngrid">
                                            <div className="home-header-dropdown-box">
                                                <div className="home-header-dropdown-boxalign">
                                                    <span>Our Story</span>
                                                    <div className="home-header-dropdown-counter">01</div>
                                                </div>
                                                <div className="home-header-dropdown-detail">
                                                    <p>Our journey, passion, and dedication.</p>
                                                </div>
                                            </div>
                                            <div className="home-header-dropdown-box">
                                                <div className="home-header-dropdown-boxalign">
                                                    <span>Our Story</span>
                                                    <div className="home-header-dropdown-counter">01</div>
                                                </div>
                                                <div className="home-header-dropdown-detail">
                                                    <p>Our journey, passion, and dedication.</p>
                                                </div>
                                            </div>
                                            <div className="home-header-dropdown-box">
                                                <div className="home-header-dropdown-boxalign">
                                                    <span>Our Story</span>
                                                    <div className="home-header-dropdown-counter">01</div>
                                                </div>
                                                <div className="home-header-dropdown-detail">
                                                    <p>Our journey, passion, and dedication.</p>
                                                </div>
                                            </div>
                                            <div className="home-header-dropdown-box">
                                                <div className="home-header-dropdown-boxalign">
                                                    <span>Our Story</span>
                                                    <div className="home-header-dropdown-counter">01</div>
                                                </div>
                                                <div className="home-header-dropdown-detail">
                                                    <p>Our journey, passion, and dedication.</p>
                                                </div>
                                            </div>
                                            <div className="home-header-dropdown-box">
                                                <div className="home-header-dropdown-boxalign">
                                                    <span>Our Story</span>
                                                    <div className="home-header-dropdown-counter">01</div>
                                                </div>
                                                <div className="home-header-dropdown-detail">
                                                    <p>Our journey, passion, and dedication.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-header-menu-alignment">
                            <a>
                                <span>Products</span>
                            </a>
                        </div>
                        <div className="home-header-menu-alignment">
                            <a>
                                <span>Solutions</span>
                            </a>
                        </div>
                        <div className="home-header-menu-alignment">
                            <a>
                                <span>Partners</span>
                            </a>
                        </div>
                        <div className="home-header-menu-alignment">
                            <a>
                                <span>Contact</span>
                            </a>
                        </div>
                    </div>
                    <div className="home-header-button">
                        <button>Enquiry</button>
                    </div>
                    <div className="header-mobile-menu">
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    )
}