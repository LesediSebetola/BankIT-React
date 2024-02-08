import React from 'react'
import './Features.css'
import Photo from './Assets/IMG_7185.JPG'
import OnlineBanking from './Assets/online.jpg'
import PersonalAccount from './Assets/personal.PNG'
import BusinessAccount from './Assets/business.PNG'

const Features = () => {
  return (
    <div>
        <section id="features">
            
            <h1 class="heading">Features</h1>
            <p class="heading-text">Explore the modern, reliable and better banking with us!</p>
            
        <div class="section">
            <div className="container align">
                <img src={OnlineBanking} alt=""/>
                <h3>Online Banking</h3>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum!</p>
                <a href="" className="learn-more">Learn More</a>
            </div>
            <div className="container align">
                <img src={PersonalAccount} alt=""/>
                <h3>Personal Account</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tempore.</p>
                <a href="" className="learn-more">Learn More</a>
            </div>
            <div className="container align">
                <img src={BusinessAccount} alt=""/>
                <h3>Business Account</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, nemo?</p>
                <a href="" className="learn-more">Learn More</a>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Features
