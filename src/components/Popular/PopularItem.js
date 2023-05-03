import React from 'react'
import { Link } from 'react-router-dom'

function PopularItem(props) {
    return (
        <Link to={`/${props.name.toLowerCase().split(' ').join('-')}`} className="popular__content-item" >
            <div className="popular__content-item-animation-helper" style={{ backgroundImage: `url(http://localhost:3000/static/media/arts/${props.name.toLowerCase().split(' ').join('-')}.jpg)` }}>
                <div className="popular__content-item-avatar" style={{ backgroundImage: `url(http://localhost:3000/static/media/avatars/${props.name.toLowerCase().split(' ').join('-')}.png)` }}></div>
                <div className="popular__content-item-info">
                    <div className="popular__content-item-label">Owner</div>
                    <div className="popular__content-item-name">{props.name}</div>
                </div>
            </div>
        </Link>
    )
}

export default PopularItem