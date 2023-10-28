import React, { useState } from 'react';
import '../index.css';
import androidImage from './android.jpg';
import iosImage from './ios.jpg';
import StoicaImage from './stoica.jpg';
import calm from './calm.jpg';
import tile from './tile.jpg';

function Hero() {
    return (
        <div className="hero-container">
            <h2 className="montserratFont">Welcome to</h2>
            <h2 className="stitle">S T O I C A</h2>
            <h3 className="montserratFont2">Mental Health & Well-being</h3>
            <div className="container">
                <div className="inner-rectangle2">
                    <h2 className="p5">App coming soon</h2>
                    <img src={StoicaImage} className="second-image" />
                    <div className="button-container">
                        <button className="button1">Download</button>
                    </div>
                </div>
                <img src={tile} className="first-image" alt="Tile" />
            </div>
            <h2 className="montserratFont3">Introduction</h2>
            <h2 className="stitle2">Who Are We?</h2>
            <p className="p3">
                Stoica is a cutting-edge technological enterprise, integrating an all-encompassing digital platform for creative and forward-thinking solutions to mental and physical health problems. <br />
                Our team is founded on principals of innovation and commitment to execute preeminent projects for the benefit of employees and consumers alike.
            </p>
            <h2 className="montserratFont4">Reach Out</h2>
            <h2 className="stitle3">Contact Us</h2>            

            <div class="form-container">
            <form>
                <label class="form-label">
                    Questions?
                    <input class="form-input" type="email" />
                </label>
            </form>
        </div>


        </div>
    );
}

export default Hero;
