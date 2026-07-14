import React from "react";
import CompanyHeroSection from "./componyHeroSection/companyHeroSection";
import ScrollDown from "../../components/scrollDown";
import OurStory from "./ourStorySection";
import OurValues from "./ourValues";
import Header from "../../components/header";

export default function CompanySection() {
    return (
        <div>
            <Header/>
            <CompanyHeroSection />
            <ScrollDown />
            <OurStory />
            <OurValues />
        </div>
    )
}