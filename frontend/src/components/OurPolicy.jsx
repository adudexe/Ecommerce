import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700'>

            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>Eacy Exchange Policy</p>
                <p className='text-gray-400'>We offer a hassle free exchnage policy</p>
            </div>
            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>7 day Return Policy </p>
                <p className='text-gray-400'>We Provide 7 day free Return policy</p>
            </div>
            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>Best Customer Supporty</p>
                <p className='text-gray-400'>We provide 24/7 Customer Support</p>
            </div>
        </div>
    )
}

export default OurPolicy
