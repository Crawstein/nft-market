import React from 'react'
import image from './../../img/responsive-protection.jpg'

function ResponsiveProtection() {
    return (
        <div className='responsive-protection'>
            <h1>Hold!</h1>
            <p>The website is not yet responsive. Please visit it using your desktop* or laptop* device.<br /><small>*with screen width of at least 1450px</small></p>
            <img src={image} alt="Medical scientist showing a 'stop' sign." />
        </div>
    )
}

export default ResponsiveProtection