import React from 'react'
import './Section1.css'
import Photo from './Assets/IMG_7185.JPG'

const Section1 = () => {

   
  return (
    <div>
        <section>
            <div className="section" >
                <div className="col-1">
                    <h2>Everyone deserves a proper access to banking.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <a href="" className="open-account">Open an Account</a>
                    <a href="" className="loginn">Login</a>
                </div>
                <div className="col-2">
                    <img src={Photo} alt=""/>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Section1
