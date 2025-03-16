import React from 'react'

const NewsLetterBox = () => {

    function OnSubmitEventHandler(event) {
        event.preventDefault();
    }


    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% Off</p>
            <p className='text-gray-400 mt-3'>"Unlock 20% off your first order—subscribe now and step into a world of exclusive style and savings."</p>
            <form onSubmit={OnSubmitEventHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>Subscribe</button>
            </form>
        </div>


    )
}

export default NewsLetterBox
