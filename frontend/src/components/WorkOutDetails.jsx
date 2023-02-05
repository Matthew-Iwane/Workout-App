import React from 'react'

export const WorkOutDetails = ({workout}) => {
  return (
    <div 
        className='border border-black'
    >
        <div className='m-4'>
            <p className='uppercase tracking-wider text-2xl'>{workout.title}</p>
            <p><b>Weight(lbs): </b>{workout.load}</p>
            <p><b>Repetitions: </b>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    </div>
  )
}
