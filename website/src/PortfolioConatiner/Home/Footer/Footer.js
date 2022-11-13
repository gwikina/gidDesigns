import React from 'react'
import './Footer.css'
import img from '../../../assets/Home/shape-bg.png'
export default function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-parent">
            <img src={img} alt="no internet connection"/>
        </div>
    </div>
  )
}
