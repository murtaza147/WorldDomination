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
                        <h2 class="montserratFont">Welcome to</h2>
                        <h2 class="stitle">S T O I C A</h2>
                        <h3 class ="montserratFont">MENTAL HEALTH & WELL BEING</h3>
                        
                                
                        <div className="inner-rectangle">
                            <div className="inner-rectangle2">
                                <img src={calm} alt="ios" className="first-image"/>
                                <div className="button-container">
                                    <button className="button2">Download app on iOS</button>
                                    <button className="button1">Download app on Android</button>
                                    <img src={iosImage}className="third-image"/>
                                    <img src={androidImage}className="second-image"/>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Hero;




