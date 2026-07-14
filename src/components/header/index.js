import React from "react";
import "./header.scss"
import WhiteLogo from "../../assets/logo/white-new.png"
import logo from "../../assets/logo/black-logo.png"
import { Menu } from "lucide-react";
import { NavLink } from "react-router";

export default function Header() {
    return (
        <div className="header-section">
            <div className="container">
                <div className="header-alignment">
                    <div className="header-logo">
                        <NavLink to={"/"}>
                            <img className="WhiteLogo" src={WhiteLogo} alt="WhiteLogo" />
                            <img className="logo" src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="header-menu">
                        <div className="header-menu-alignment">
                            <NavLink to={"/compony"}>
                                <span>Company</span>
                            </NavLink>
                            <div className="header-menu-dropdown">
                                <div className="container7">
                                    <div className="header-dropdown-hoghtbox">
                                        <div className="header-dropdowngrid">
                                            <div className="header-dropdown-box">
                                                <div className="header-dropdown-boxalign">
                                                    <span>Our Story</span>
                                                    <div className="header-dropdown-counter">01</div>
                                                </div>
                                                <div className="header-dropdown-detail">
                                                    <p>Our journey, passion, and dedication.</p>
                                                </div>
                                            </div>
                                            <div className="header-dropdown-box">
                                                <div className="header-dropdown-boxalign">
                                                    <span>Our Story</span>
                                                    <div className="header-dropdown-counter">01</div>
                                                </div>
                                                <div className="header-dropdown-detail">
                                                    <p>Our journey, passion, and dedication.</p>
                                                </div>
                                            </div>
                                            <div className="header-dropdown-box">
                                                <div className="header-dropdown-boxalign">
                                                    <span>Our Story</span>
                                                    <div className="header-dropdown-counter">01</div>
                                                </div>
                                                <div className="header-dropdown-detail">
                                                    <p>Our journey, passion, and dedication.</p>
                                                </div>
                                            </div>
                                            <div className="header-dropdown-box">
                                                <div className="header-dropdown-boxalign">
                                                    <span>Our Story</span>
                                                    <div className="header-dropdown-counter">01</div>
                                                </div>
                                                <div className="header-dropdown-detail">
                                                    <p>Our journey, passion, and dedication.</p>
                                                </div>
                                            </div>
                                            <div className="header-dropdown-box">
                                                <div className="header-dropdown-boxalign">
                                                    <span>Our Story</span>
                                                    <div className="header-dropdown-counter">01</div>
                                                </div>
                                                <div className="header-dropdown-detail">
                                                    <p>Our journey, passion, and dedication.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-menu-alignment">
                            <NavLink to={"/compony"}>
                                <span>Products</span>
                            </NavLink>
                        </div>
                        <div className="header-menu-alignment">
                            <NavLink to={"/compony"}>
                                <span>Solutions</span>
                            </NavLink>
                        </div>
                        <div className="header-menu-alignment">
                            <NavLink to={"/compony"}>
                                <span>Partners</span>
                            </NavLink>
                        </div>
                        <div className="header-menu-alignment">
                            <NavLink to={"/compony"}>
                                <span>Contact</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="header-button">
                        <button>Enquiry</button>
                    </div>
                    <div className="header-mobile-menu">
                        <Menu />
                        <div className="mobile-menu-hover">
                            <div className="header-menu-alignment">
                                <a>
                                    <span>Company</span>
                                </a>
                            </div>
                            <div className="header-menu-alignment">
                                <a>
                                    <span>Company</span>
                                </a>
                            </div>
                            <div className="header-menu-alignment">
                                <a>
                                    <span>Company</span>
                                </a>
                            </div>
                            <div className="header-menu-alignment">
                                <a>
                                    <span>Company</span>
                                </a>
                            </div>
                            <div className="header-menu-alignment">
                                <a>
                                    <span>Company</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}