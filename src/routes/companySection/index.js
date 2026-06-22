import React from "react";
import CompanyHeroSection from "./componyHeroSection/companyHeroSection";
import ScrollDown from "../../components/scrollDown";
import OurStory from "./ourStorySection";
import OurValues from "./ourValues";

export default function CompanySection() {
    return (
        <div>
            <CompanyHeroSection />
            <ScrollDown />
            <OurStory />
            <OurValues />
        </div>
    )
}