import HeroHeading from '@/components/common/HeroHeading'
import HeroVideo from '@/components/common/HeroVideo'
import HeroSection from '@/sections/HeroSection'
import OfferSection from '@/sections/OfferSection'
import PopularProductSection from '@/sections/PopularProductSection'
import ProductSection from '@/sections/ProductSection'
import WhySection from '@/sections/WhySection'
import React from 'react'
import Bridal1 from "../../public/bridal1.jpg"
import Bridal2 from "../../public/bridal2.jpg"
import Bridal3 from "../../public/bridal3.jpg"
import { CardSvg, HeroSvg } from '@/components/common/Svgs'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { TbShoppingBagCheck } from 'react-icons/tb'
import Marquee from 'react-fast-marquee'
import Button from '@/components/layout/Button'
import Image from 'next/image'

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


const HomePage = () => {
  return (
    <div>
      <section>
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
      </section>
      <section>
      <div className='bg-gradient-to-t from-[#363324] via-[#13110f] to-[#000000]'>
            <div className='p-7'>
                <h1 className='font-heading text-white font-6xl font-extrabold text-center m-4'>
                    Exclusive Offers for Our Valued Customers
                </h1>
                <div className='text-white flex md:flex-row flex-col gap-7 p-8 mt-8 justify-around items-center'>
                    <div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <TbShoppingBagCheck className='text-white text-6xl' />
                            <h4 className='text-2xl font-bold font-heading'>
                                Shop with Confidence
                            </h4>
                        </div>
                        <p className='text-xl font-para text-gray-400'>
                            Enjoy seamless shopping with excellent customer service and secure payments.
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <FaMoneyBillTransfer className='text-white text-6xl' />
                            <h4 className='text-2xl font-bold font-heading'>
                                Money Back Guaranteed
                            </h4>
                        </div>
                        <p className='text-xl font-para text-gray-400'>
                            We stand behind the quality of our products. We offer a hassle-free money-back guarantee.
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <FaRegQuestionCircle className='text-white text-6xl' />
                            <h4 className='text-2xl font-bold font-heading'>
                                Have Some Questions?
                            </h4>
                        </div>
                        <p className='text-xl font-para text-gray-400'>
                            Our dedicated support team is here to assist you with any inquiries or concerns.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section>
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
      </section>
      <section>
        {/* <div className='h-1 bg-gradient-to-r from-white via-black to-white m-5' /> */}
        <ProductSection />
      </section>
      <section>
        {/* <div className='h-1 bg-gradient-to-r from-white via-black to-white m-5' /> */}
        <div>
          <div className='mt-6 p-8 bg-gradient-to-b from-white via-[#bdb79c] to-[#888162]'>
            <h3 className='text-center font-bold text-4xl'>
              WHY AISHA'S BY NUGHMAN HUSSAIN ?
            </h3>
            <div className='flex justify-around items-center gap-6 m-12'>
              <p className='font-para text-lg w-2/5 border-2 border-gray-300 bg-amber-50 rounded-lg p-6'>
                For over 40 years, we have been dedicated to crafting the finest ladies' bridal suits, combining timeless elegance with modern trends. Our extensive experience and commitment to quality ensure that each piece is meticulously designed and tailored to perfection. Trust us to make your special moments even more memorable with our unparalleled expertise and passion for excellence.
              </p>
              <div className='flex flex-col justify-center items-center'>
                <h3 className='text-8xl font-extrabold'>
                  40<span className='text-yellow-950'>+</span>
                </h3>
                <h2 className='italic font-para text-6xl font-semibold tracking-wide'>
                  years
                </h2>
              </div>
            </div>
          </div>
          <div className='-mt-0.5'>
          <svg id="wave" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 1440 140" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(135, 128, 99, 1)" offset="0%"></stop><stop stop-color="rgba(94, 90, 67)" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 0px)", opacity: "1" }} fill="url(#sw-gradient-0)" d="M0,70L80,77C160,84,320,98,480,88.7C640,79,800,47,960,28C1120,9,1280,5,1440,23.3C1600,42,1760,84,1920,102.7C2080,121,2240,117,2400,107.3C2560,98,2720,84,2880,65.3C3040,47,3200,23,3360,11.7C3520,0,3680,0,3840,2.3C4000,5,4160,9,4320,9.3C4480,9,4640,5,4800,11.7C4960,19,5120,37,5280,56C5440,75,5600,93,5760,100.3C5920,107,6080,103,6240,95.7C6400,89,6560,79,6720,81.7C6880,84,7040,98,7200,98C7360,98,7520,84,7680,77C7840,70,8000,70,8160,67.7C8320,65,8480,61,8640,67.7C8800,75,8960,93,9120,105C9280,117,9440,121,9600,121.3C9760,121,9920,117,10080,100.3C10240,84,10400,56,10560,56C10720,56,10880,84,11040,100.3C11200,117,11360,121,11440,123.7L11520,126L11520,140L11440,140C11360,140,11200,140,11040,140C10880,140,10720,140,10560,140C10400,140,10240,140,10080,140C9920,140,9760,140,9600,140C9440,140,9280,140,9120,140C8960,140,8800,140,8640,140C8480,140,8320,140,8160,140C8000,140,7840,140,7680,140C7520,140,7360,140,7200,140C7040,140,6880,140,6720,140C6560,140,6400,140,6240,140C6080,140,5920,140,5760,140C5600,140,5440,140,5280,140C5120,140,4960,140,4800,140C4640,140,4480,140,4320,140C4160,140,4000,140,3840,140C3680,140,3520,140,3360,140C3200,140,3040,140,2880,140C2720,140,2560,140,2400,140C2240,140,2080,140,1920,140C1760,140,1600,140,1440,140C1280,140,1120,140,960,140C800,140,640,140,480,140C320,140,160,140,80,140L0,140Z"></path></svg>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage