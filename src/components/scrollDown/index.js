import React from "react";
import "./scrollDown.scss"
import ShipIcon from "../../assets/logo/ShipIcon.svg"

export default function ScrollDown() {
    return (
        <div className="ScrollDown-section">
            <div className="container">
                <div className="ScrollDown-content">
                    <div className="ScrollDown-iconcenter">
                        <img src={ShipIcon} alt="ShipIcon"/>
                    </div>
                    <span>Scroll down</span>
                </div>
            </div>
        </div>
    )
}