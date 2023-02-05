import React from 'react'
import { Link } from 'react-router-dom'
import {GiWeightLiftingUp} from 'react-icons/gi'

export const NavBar = () => {
  return (
    <header>
        <div className='py-8 bg-white'>
            <Link to="/">
                <h1 className='font-bold text-2xl sm:text-3xl flex mx-32 gap-2'>
                    <GiWeightLiftingUp size={40} /> Workout Buddy
                </h1>
            </Link>
        </div>
    </header>
  )
}
