import React from 'react'
import img from "../../assets/images/About_images.jpg"
import BorderComponent from '../BorderComponent'

function HeroAboutComponent() {
    return (
        <div>
            <div>
                <h2 className='md:text-5xl sm:text-3xl text-2xl font-bold'>Welcome to 5B5Y WINNER</h2>
                <p className='md:text-3xl sm:text-2xl text-xl font-bold text-customPurple-light my-2'>~The Easiest and fair game to get wins with friends~</p>
                <p className='text-xl font-semibold my-2'>"We're all about the winnings!"</p>
            </div>

            {/* Centered Image */}
            <div className="w-full flex justify-center items-center my-20">
                <img
                    src={img}
                    alt="About us"
                    className="rounded-lg shadow-lg md:h-96"
                />
            </div>

            <button className='bg-customPurple px-10 py-3 md:w-1/6  font-bold text-xl'>
                About Us
            </button>

            <div className='flex items-center justify-center pt-10'>
                <p className='md:w-2/3 text-xl font-bold md:text-center text-left'>
                    5by5 Winner is a combination of bingo, betting, and lottery games, all
                    integrated into a simpler format. We launched this game after discovering
                    that many casino games are difficult to win and have low winning
                    percentages. Additionally, unlike traditional bingo and lottery tickets
                    where you compete against millions of players for large prizes, 5by5
                    Winner offers a more balanced playing experience
                </p>
            </div>

            <BorderComponent />

            <div className='flex items-center justify-center pt-10'>
                <p className='md:w-2/3 text-xl font-bold md:text-center text-left'>
                    why 5by5 Winner is different? Here's a brief description about 5by5 Winner;
                    Each game consists of a table with 20 cells (20 tickets) arranged in 4 columns and
                    5 rows. Players can buy up to 5 tickets each. Once all 20 tickets are sold, they are
                    assigned random numbers from 1 to 20, and an automatic draw takes place,
                    generating numbers from 1 to 20. The first column to match the generated
                    numbers wins the prizes.(Note: The 5 winners in the winning column will receive
                    their prize money directly in their wallets.) Imagine buying 5 tickets in the winning
                    column—your prize will be multiplied by 5! Or, if you buy 3 tickets spread across
                    different columns, you have a chance for an easy win. Additionally, teaming up with
                    friends can exponentially boost your winnings while allowing you to choose your
                    own strategy playing the game!
                </p>
            </div>

            <BorderComponent />

            <div className='flex flex-col items-center justify-center pt-10 space-y-8'>
                <p className='md:w-2/3 text-xl font-bold md:text-center text-left'>
                    For all your plays will provide you the Instructions and the different
                    strategies to help you start winning. Prizes vary depending on the type of
                    ticket and amount of tickets purchased. For any assistance, feel free to
                    contact us. Watch our tutorial below or start playing now!
                </p>
                <button className='bg-customPurple px-10 py-4 md:w-1/6 rounded font-bold text-xl'>
                    Play Now
                </button>
            </div>

        </div>
    )
}

export default HeroAboutComponent