import React from 'react'
import { FaRegQuestionCircle } from 'react-icons/fa'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { TbShoppingBagCheck } from 'react-icons/tb'

const OfferSection = () => {
    return (
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
    )
}

export default OfferSection