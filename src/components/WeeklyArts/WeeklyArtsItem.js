import React from 'react'
import Timer from '../Header/Timer'
import { Link } from 'react-router-dom'

function WeeklyArtsItem(props) {
    return (
        <div className="weekly-arts__item">
            <div className="weekly-arts__item-nft" style={{backgroundImage: `url(${props.nft})`}}></div>
            <div className="weekly-arts__item-info">
                <div className="weekly-arts__item-info-header">
                    <div className="weekly-arts__item-info-title">{props.title}</div>
                    <div className="weekly-arts__item-info-price">
                        <div className="weekly-arts__item-crypto-icon"></div>
                        <div className="weekly-arts__item-price">
                            {props.price}ETH
                        </div>
                    </div>
                </div>
                <div className="weekly-arts__cta">
                    <div className="weekly-arts__timer">
                        <div className="weekly-arts__timer-title">
                            Ending In
                        </div>
                        <div className="weekly-arts__timer-counter">
                            <div className="weekly-arts__timer-icon"></div>
                            <Timer />
                        </div>
                    </div>
                    <Link to={props.link} className="weekly-arts__button button">Place A Bid</Link>
                </div>
            </div>
        </div>
    )
}

export default WeeklyArtsItem