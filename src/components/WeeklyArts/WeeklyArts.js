import React from 'react'
import { Link } from 'react-router-dom'
import WeeklyArtsItem from './WeeklyArtsItem'
import nft1 from './../../img/weekly/cyberpunk-cocomo.jpg'
import nft2 from './../../img/weekly/charge-qi-tiao-yu.jpg'
import nft3 from './../../img/weekly/surgeon-josh-rife.jpg'

const weeklyArtsData = [
    {
        title: `Cyberpunk Cocomo`,
        price: 490,
        link: `/bid`,
        nft: nft1
    },
    {
        title: `Charge, Qi tiao yu`,
        price: 480,
        link: `/bid`,
        nft: nft2
    },
    {
        title: `Surgeon, Josh Rife`,
        price: 470,
        link: `/bid`,
        nft: nft3
    }
]

function WeeklyArts() {
    return (
        <section className='weekly-arts' id='weekly-arts'>
            <div className="container">
                <div className="weekly-arts__header">
                    <h2 className="weekly-arts__title title">
                        <span>Amazing</span> and Super
                        Unique Art of This <span>Week</span>
                    </h2>
                    <Link to="/weekly-arts" className='weekly-arts__button button'>See All</Link>
                </div>
                <div className="weekly-arts__content">


                    {weeklyArtsData.map((item, index) => {
                        return <WeeklyArtsItem key={index} {...item} />
                    })}


                </div>
            </div>
        </section>
    )
}

export default WeeklyArts