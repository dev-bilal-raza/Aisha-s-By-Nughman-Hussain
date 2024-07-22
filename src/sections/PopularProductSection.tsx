import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import Bridal1 from "../../public/bridal1.jpg"
import Bridal2 from "../../public/bridal2.jpg"
import Bridal3 from "../../public/bridal3.jpg"
import Button from '@/components/layout/Button'
import { CardSvg } from '@/components/common/Svgs'

const bridals = [
  {
    title: "Purple Coat Zardori and Resham",
    imageSrc: Bridal1,
    prize: 40000,
    strikePrice: 50000
  },
  {
    title: "Long shirt with Zurdozi and Naqshi",
    imageSrc: Bridal2,
    prize: 25000,
    strikePrice: 30000
  },
  {
    title: "Soft pink stylish Khaddi Mesuri",
    imageSrc: Bridal3,
    prize: 60000,
    strikePrice: 70000
  },
]

const PopularProductSection = () => {
  return (
    <div className='h-screen bg-gradient-to-t from-[#ffffff] via-[#979589] to-[#363324]'>
    <div className='h-1 bg-gradient-to-r from-[#3E3B2C] via-black to-[#3E3B2C]' />
    <div className='flex flex-col justify-center items-center gap-4 '>
      <div className='mt-12 w-full flex justify-around'>
        <CardSvg />
        <h1 className='font-heading font-extrabold text-center m-4'>
          OUR TRENDY <span className='text-[#f1f1f1]'>BRIDALS</span>
        </h1>
        <CardSvg />
      </div>
      <Marquee pauseOnHover={true} gradient={true} gradientColor='#5B584A' gradientWidth={150}>
        {
          bridals.map((item, i) => (
            <div key={i} className="m-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image className="rounded-t-lg h-80 object-cover" src={item.imageSrc} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  <del className='text-sm'>${item.strikePrice}</del> <ins className='no-underline font-semibold text-amber-950'>${item.prize}</ins>
                </p>
                <Button text='Go To Product'/>
              </div>
            </div>
          ))
        }
      </Marquee>
    </div>
  </div>
  )
}

export default PopularProductSection