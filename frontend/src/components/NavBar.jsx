import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
        <div className='py-8 bg-white'>
            <Link to="/">
                <h1 className='font-bold text-3xl flex justify-between mx-32'>
                    Workout Buddy
                </h1>
            </Link>
        </div>
    </header>
  )
}
