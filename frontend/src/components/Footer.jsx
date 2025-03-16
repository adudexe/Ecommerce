import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full sm:w-2/3 text-gray-600'>
                        Explore our curated collections designed to inspire and elevate your everyday style. At Forever, we believe fashion should transcend trends and last a lifetime. Discover pieces that speak to your individuality and embrace the elegance of timeless design.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-123-456-789</li>
                        <li>forever@gamil.com</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer
