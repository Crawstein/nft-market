import { Link } from "react-router-dom"
import { useState } from "react"
function InfoBlock(props) {

    const [email, setEmail] = useState('')

    return (
        <div className={`info-block ${props.customClass ? props.customClass : ''}`}>

            {props.h2 ?
                <h2 className="info-block__title title">
                    {props.title}
                </h2>
                :
                <h1 className="info-block__title title">
                    {props.title}
                </h1>
            }

            <p className="info-block__text text">
                {props.text}
            </p>

            {props.buttons === 'subscribe' ?
                <form className="info-block__subscribe">
                    <input placeholder="Enter your e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="info-block__subscribe-input"/><button className="info-block__subscribe-button button">Subscribe</button>
                </form>
                :
                <div className="info-block__buttons">
                    <Link to={props.buttons.buttonLink} className="button info-block__button">{props.buttons.buttonText}</Link>
                    <Link to={props.buttons.subButtonLink} className="sub-button info-block__sub-button">{props.buttons.subButtonText}</Link>
                </div>
            }


        </div>
    )
}

export default InfoBlock