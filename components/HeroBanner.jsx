import React from 'react'
import Link from 'next/Link'
import {urlFor} from '../LIB/client'
const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
        <div>
            <p>{heroBanner.smallText}</p>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
            <img src={urlFor(heroBanner.image)} alt ="headphones" className="hero-banner-image"/>
        </div>
        <div><Link href={`/product/${heroBanner.product}`}>
            <button type="button" className="">{heroBanner.buttonText}</button>
            </Link>
            <div className ="desc">
                <h5>{heroBanner.desc}</h5>
                <p>{heroBanner.discount}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner