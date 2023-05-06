import React from 'react'
import InfoBlock from '../InfoBlock/InfoBlock'
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import { useSelector } from 'react-redux';

function Subscribe(props) {

    const parallaxStyles = useSelector(state => state.toolkit.subscribeParallaxStyles)

    return (

        <section className="subscribe" id="subscribe">
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                <div className="container">
                    <div className="subscribe__nfts">
                        <MouseParallaxChild factorX={.2} factorY={.2} style={parallaxStyles[0]}>
                            <div className="subscribe__nft-lower"></div>
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={.1} factorY={.1} style={parallaxStyles[1]}>
                            <div className="subscribe__nft-upper"></div>
                        </MouseParallaxChild>
                    </div>
                    <InfoBlock h2={true} {...props.infoBlockData} customClass="subscribe__info" />
                </div>
            </MouseParallaxContainer>
        </section>

    )
}

export default Subscribe