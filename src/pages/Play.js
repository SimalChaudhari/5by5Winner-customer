import React from 'react'
import HeroPlayComponent from '../components/playComponent/HeroPlayComponent'
import PlayList from '../components/playComponent/PlayList'

function Play() {
    return (
        <div>
            <HeroPlayComponent />

            <div className="container mx-auto py-16 text-center px-4">
                <p className='text-xl md:mb-5 mb-10'>Click the link below to view all the prices for the tickets alongside the prize money</p>
                <button className='bg-customPurple px-14 py-5  font-bold text-xl hover:bg-purple-800 transition-all rounded'>
                    GUIDE
                </button>
            </div>

            <PlayList/>
        </div>
    )
}

export default Play