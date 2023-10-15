import React from 'react';
import '../index.css';
import androidImage from './android.jpg';
import iosImage from './ios.jpg';
import StoicaImage from './stoica.jpg';
import calm from './calm.jpg';

function Hero() {
    return (
        <div className="rectangle-container">
            <div className="rectangle">
                <div className="text-center">
                    <h2 className="montserratFont">Welcome to</h2>
                    <h2 className="stitle">S T O I C A</h2>
                    <h3 className ="montserratFont">MENTAL HEALTH & WELL BEING</h3>
                    <div className="inner-rectangle">
                        <div className="inner-rectangle2">
                            <img src={calm} alt="ios" className="first-image" />
                            <div className="button-container">
                                <a href="YOUR_IOS_APP_URL" target="_blank" rel="noopener noreferrer">
                                    <button className="button2">Download app on iOS</button>
                                </a>
                                <a href="YOUR_ANDROID_APP_URL" target="_blank" rel="noopener noreferrer">
                                    <button className="button1">Download app on Android</button>
                                </a>
                                <img src={iosImage} className="third-image" alt="iOS" />
                                <img src={androidImage} className="second-image" alt="Android" />
                                <img src={StoicaImage} className="fourth-image" alt="Stoica" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
