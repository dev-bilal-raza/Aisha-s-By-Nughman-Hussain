import React from 'react'
import Products from '@/components/common/Products'

const ProductSection = () => {
    return (
        <div className=''>
            <div className='h-1 bg-gradient-to-r from-white via-black to-white m-5' />
            <div className=''>
                <h1 className='font-heading font-extrabold text-4xl text-center mt-12'>Bridals Section</h1>
            </div>
            <div className='p-7'>
                <Products category='bilal' />
            </div>
            <div className='h-1 bg-gradient-to-r from-white via-black to-white m-5' />
            <div className=''>
                <h1 className='font-heading font-extrabold text-4xl text-center mt-12'>Ready made Section</h1>
            </div>
            <div className='p-7'>
                <Products category='bilal' />
            </div>
        </div>
    )
}

export default ProductSection