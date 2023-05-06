import React from 'react'
import { Link } from 'react-router-dom'
import PopularItem from './PopularItem'
import { useSelector } from 'react-redux'


function Popular() {
    const popularsData = useSelector(state => state.toolkit.popularsData)

    return (
        <section className="popular" id="popular">
            <div className="container">
                <div className="popular__header">
                    <h2 className="popular__title title">
                        Popular <span>Artists</span> On This Week
                    </h2>
                    <Link to="/popular" className="popular__button button">See All</Link>
                </div>
                <div className="popular__content">
                    {popularsData.map((item, index) => {
                        return <PopularItem key={index} {...item}/>
                    })}
                    
                </div>
            </div>
        </section>
    )
}

export default Popular