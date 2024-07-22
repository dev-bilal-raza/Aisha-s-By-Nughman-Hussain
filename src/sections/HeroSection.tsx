import React from 'react'
import HeroVideo from '@/components/common/HeroVideo'
import HeroHeading from '@/components/common/HeroHeading'
import { HeroSvg } from '@/components/common/Svgs'

const HeroSection = () => {
  return (
    <div className=''>
      <div className='z-30 absolute top-52'>
        <div className='text-white h-3/6 w-3/4 mx-auto flex flex-col justify-center items-center'>
          <div className=''>
            <HeroHeading text="Unveil Your Elegance with Premium Ladies' Suits for Every Celebration" />
          </div>
          <p className='text-center font-para text-2xl text-gray-300'>
            Explore our curated collection of stunning ladies&apos; suits, perfect for weddings, special events, and everyday elegance. From breathtaking bridal wear to chic casuals, we offer a diverse range of styles designed to make you look and feel your best.
          </p>
        </div>
      </div>
      <div className='absolute w-full h-[51.9rem] bg-black/85'></div>
      <div>
        <HeroVideo />
        <div className='absolute'>
          <HeroSvg />
        </div>
      </div>
    </div>
  )
}

export default HeroSection