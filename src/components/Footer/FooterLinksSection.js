import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLinksSection(props) {
    return (
        <div className="footer__links-section">
            <div className="footer__links-section-title">{props.title}</div>
            {props.links.map((item, index) => {
                return <Link key={index} to={`/${item.toLowerCase().split(' ').join('-')}`} className="footer__link">{item}</Link>
            })}
        </div>
    )
}
