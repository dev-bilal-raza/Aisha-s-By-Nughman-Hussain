import React from 'react'
import Bridal1 from "../../../public/bridal1.jpg"
import Bridal2 from "../../../public/bridal2.jpg"
import Bridal3 from "../../../public/bridal3.jpg"
import ProductCard from './ProductCard'

const Products = ({ category }: { category: string }) => {

    const bridals = [
        {
            title: "Purple Coat Zardori and Resham",
            imageSrc: Bridal1,
            price: 40000,
            strikePrice: 50000
        },
        {
            title: "Long shirt with Zurdozi and Naqshi",
            imageSrc: Bridal2,
            price: 25000,
            strikePrice: 30000
        },
        {
            title: "Soft pink stylish Khaddi Mesuri",
            imageSrc: Bridal3,
            price: 60000,
            strikePrice: 70000
        },
        {
            title: "Soft pink stylish Khaddi Mesuri",
            imageSrc: Bridal3,
            price: 60000,
            strikePrice: 70000
        },
        {
            title: "Soft pink stylish Khaddi Mesuri",
            imageSrc: Bridal3,
            price: 60000,
            strikePrice: 70000
        },
        {
            title: "Soft pink stylish Khaddi Mesuri",
            imageSrc: Bridal3,
            price: 60000,
            strikePrice: 70000
        },
    ]

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-12 p-7'>
            {bridals.map((item, i) => (
                <div key={i} className=''>
                    <ProductCard title={item.title} image_src={item.imageSrc} price={item.price} />
                </div>
            ))}
        </div>
    )
}

export default Products