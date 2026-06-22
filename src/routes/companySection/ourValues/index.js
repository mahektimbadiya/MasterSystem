import React from "react";
import "./ourValues.scss"
import WaveIcon from "../../../assets/logo/WaveIcon.svg"
import VisionImage from "../../../assets/images/vision.png"
import MissionImage from "../../../assets/images/mission.png"

export default function OurValues() {
    return (
        <div className="OurValues-ContnetAlignment">
            <div className="container4">
                <div className="OurValues-childText">
                    <span>Charting the Course Towards Maritime Excellence</span>
                </div>
                <div className="OurValues-titleAlignment">
                    <h4>OUR VALUES</h4>
                    <div className="OurValues-counter">
                        <span>02</span>
                    </div>
                </div>
                <div className="OurValues-BoxrightAlignment">
                    <div className="OurValues-box">
                        <div className="OurValues-grid">
                            <div className="OurValues-gridItems">
                                <h6>Our Vision</h6>
                                <p>Driven by a relentless pursuit of excellence, our vision is to become the leading supplier and service provider for the maritime, oil & gas, and industrial sectors, delivering navigation, communication , automation, instrumentation, and safety solutions at competitive prices.</p>
                                <div className="OurValues-waveIcon">
                                    <img src={WaveIcon} alt="WaveIcon" />
                                </div>
                            </div>
                            <div className="OurValues-gridItems">
                                <div className="OurValues-visionImage">
                                    <img src={VisionImage} alt="VisionImage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="OurValues-secBoxAlignment">
                    <div className="OurValues-secBox-grid">
                        <div className="OurValues-secBox-gridItems">
                            <div className="OurValues-secBox-visionImage">
                                <img src={MissionImage} alt="MissionImage" />
                            </div>
                        </div>
                        <div className="OurValues-secBox-gridItems">
                            <h6>Our Mission</h6>
                            <p>Dedicated to exceeding quality, safety, and environmental standards, our mission is to provide top-notch marine services and supply solutions. We aim to fulfill our customers' needs in the maritime, oil & gas, and industrial sectors through personalized and reliable services, ensuring their success and satisfaction.</p>
                            <div className="OurValues-waveIcon">
                                <img src={WaveIcon} alt="WaveIcon" />
                            </div>
                            <div className="OurValues-button">
                                <button>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}