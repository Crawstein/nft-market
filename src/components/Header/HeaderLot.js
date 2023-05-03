import React from 'react'
import Timer from './Timer'
import { Link } from 'react-router-dom'

function HeaderLot() {
    return (
        <div className="header__lot">
            <div className="header__lot-nft">
                <div className="header__lot-mark">
                    <div className="header__lot-mark-text"></div>
                    <div className="header__lot-mark-star"></div>
                </div>
            </div>
            <div className="header__lot-auction">
                <div className="header__lot-stats">
                    <div className="header_lot-stats-item">
                        <div className="header__lot-stats-section">Ends in</div>
                        <div className="header__lot-stats-value"><Timer /></div>
                    </div>
                    <div className="header_lot-stats-item">
                        <div className="header__lot-stats-section">Current bid</div>
                        <div className="header__lot-stats-value"><span>0.24</span>ETH</div>
                    </div>

                </div>
                <Link className="header__lot-auction-button button">Place A Bid</Link>
            </div>
        </div>
    )
}

export default HeaderLot