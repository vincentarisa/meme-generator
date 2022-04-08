import React from "react";
import trollFace from "../Images/meme.ico"

export default function Navigation(){
    return(
        <div className="container-fluid pt-3 pb-3 px-4 custom-container">
            <nav className="navbar custom-nav">
                <div className="d-flex">
                    <img src={trollFace} className="custom-nav-img" alt="Troll face"/>
                    <h3 className="custom-nav-title">Meme Generator</h3>
                </div>
                <h5 className="custom-nav-project float-end">React Project</h5>
            </nav>
        </div>
    )
}