import React from "react";
import "./companyHeroSection.scss"
import { ZodiacAquarius } from "lucide-react";

export default function CompanyHeroSection() {
    return (
        <div className="CompanyBanner-heroBanner">
            <div className="CompanyBanner-wfull">
                <div className="container">
                    <h1>THE COMPANY</h1>
                    <div className="CompanyBanner-textgrid">
                        <div className="CompanyBanner-textgridItems">
                            <div className="CompanyBanner-icon"></div>
                        </div>
                        <div className="CompanyBanner-textgridItems">
                            <span>Navigating the Seas of Success with Expertise and Innovation.</span>
                        </div>
                    </div>
                    <div className="CompanyBanner-iconRight">
                        <a>
                            <div className="CompanyBanner-GetInTouchHero">
                                <div>
                                    <div className="CompanyBanner-textIcon">
                                        <span>Get</span>
                                        <svg><ZodiacAquarius /></svg>
                                    </div>
                                    <div className="CompanyBanner-secText">
                                        <span>in touch</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}