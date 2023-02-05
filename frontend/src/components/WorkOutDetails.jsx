import React from 'react'

export const WorkOutDetails = ({workout}) => {
  return (
    <div >
        <div className='m-4 h-auto'>
            <p className='uppercase tracking-wider sm:text-2xl text-lg text-blue-600'>{workout.title}</p>
            <p><b>Weight(lbs): </b>{workout.load}</p>
            <p><b>Repetitions: </b>{workout.reps}</p>
            <p className= 'font-thin'>{workout.createdAt}</p>
        </div>
    </div>
  )
}
