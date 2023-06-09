import React from 'react'
import InfoBlock from '../InfoBlock/InfoBlock'
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import { useSelector } from 'react-redux';

function CreateAndSell(props) {

    const parallaxStyles = useSelector(state => state.toolkit.createAndSellParallaxStyles)

    return (

        <section className='create-and-sell' id='create-and-sell'>
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} style={{ overflow: 'unset !important' }}>
                <div className="container">
                    <InfoBlock customClass="create-and-sell__info" h2={true} {...props.infoBlockData} />
                    <div className="create-and-sell__nfts">
                        <MouseParallaxChild factorX={.2} factorY={.2} style={parallaxStyles[0]}>
                            <div className="create-and-sell__nft-lower"></div>
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={.1} factorY={.1} style={parallaxStyles[1]}>
                            <div className="create-and-sell__nft-upper"></div>
                        </MouseParallaxChild>
                    </div>
                </div>
            </MouseParallaxContainer>
        </section>

    )
}

export default CreateAndSell