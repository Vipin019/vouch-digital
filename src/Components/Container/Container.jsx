import React from 'react'
import './Container.css'
import Image from '../ImagesAndIcones/Image.png'
import SigninForm from './SigninForm'


const Container = () => {
  return (
    <div id="container">
        <div className="signinForm">
        <SigninForm></SigninForm>
        </div>
        <div className="image">
            <img src={Image} />
        </div>
    </div>
  )
}

export default Container
