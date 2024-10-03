import React from 'react'
import './style/LandingPage.css'
import img_dog from '../assets/img_dog.jpeg'
import img_dogf from '../assets/img_dog2.jpeg'
import img_dogs from '../assets/img_dog3.jpeg'
import img_dog1 from '../assets/Dog-cat-BG.webp'
import img_dog2 from '../assets/dog22.jpeg'
import img_dogn from '../assets/no.webp'


function LandingPage() {
    return (
        <div className='landing-page'>
            <div className="main-bg">
                <img src={img_dogf} alt="" />
                <h2>Hello 👋🏻
                    <br /> How Are You?</h2>
                <p>One Of The Best Site For Dogs. <br /> Explore Our Site...🐕</p>
            </div>
            <div className="more-img">
                <div className="side-img">
                    <img src={img_dogs} alt="" />
                </div>
                <div className="side-img">
                    <img src={img_dogn} alt="" />
                </div>
                <div className="side-img">
                    <img src={img_dog2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
