import React from 'react'
import CountUp from 'react-countup';

function HeaderStats(props) {
    return (
        <div className="header__stats">
            <div className="stats__item">
                <div className="stats__amount"><span><CountUp decimals={1} start={0} end={props.artwork} duration={3} separator="." /></span>K</div>
                <div className="stats__topic">Art work</div>
            </div>
            <div className="stats__item">
                <div className="stats__amount"><span><CountUp decimals={1} start={0} end={props.artist} duration={3} separator="." /></span>K</div>
                <div className="stats__topic">Artist</div>
            </div>
            <div className="stats__item">
                <div className="stats__amount"><span><CountUp decimals={1} start={0} end={props.collection} duration={3} separator="." /></span>K</div>
                <div className="stats__topic">Collection</div>
            </div>
        </div>
    )
}

export default HeaderStats