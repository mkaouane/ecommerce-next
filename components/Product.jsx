import React from 'react'
import {urlFor} from '../LIB/client'
import Link from 'next/Link'

const Product = ({product : {title, Price, slug, image}}) => {
  return (
    <>
    <Link href={`/product/${slug.current}`}>
        <div className="product-card">
            <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className='product-image'/>
            <p className="product-name">{title}</p>
            <p className="product-price">${Price}</p>
        </div>
    </Link>
    </>
  )
}

export default Product