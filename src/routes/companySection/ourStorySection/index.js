import React from "react";
import "./ourStory.scss"
import OurStoryImage from "../../../assets/images/OurStoryImage.png"
import WaveIcon from "../../../assets/logo/WaveIcon.svg"

export default function OurStory() {
    return (
        <div className="ourStory-Section">
            <div className="container4">
                <div className="OurStory-childText">
                    <span>Our journey, passion, and dedication.</span>
                </div>
                <div className="OurStory-titleAlignment">
                    <h4>OUR STORY</h4>
                    <div className="OurStory-counter">
                        <span>01</span>
                    </div>
                </div>
                <div className="OurStory-grid">
                    <div className="OurStory-gridItems">
                        <div className="OurStory-image">
                            <img src={OurStoryImage} alt="OurStoryImage" />
                        </div>
                    </div>
                    <div className="OurStory-gridItems">
                        <h6>Our Journey Since 1999</h6>
                        <p>Founded in 1999 in Abu Dhabi, UAE, we have been dedicated to delivering exceptional maritime solutions, shaping the industry's future, and fostering excellence through our unwavering commitment to innovation, expertise, and customer satisfaction.</p>
                        <div className="OurStory-waveicon">
                            <img src={WaveIcon} alt="WaveIcon"/>
                        </div>
                        <div className="OurStory-button">
                            <button>
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}