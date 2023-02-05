import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// components
import { WorkOutDetails } from '../components/WorkOutDetails';
import { WorkoutForm } from '../components/WorkoutForm';


export const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext();
  
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_WORKOUT', payload: json});
      }
    }
    fetchWorkout()
  },[dispatch])

  return (
    <div className='grid sm:grid-cols-2'>
        <div>
          <WorkoutForm />
        </div>
        <div>
          {workouts && workouts.map((workout) => (
            <p className='border border-gray-300 rounded shadow-md mx-10 my-6 hover:scale-105 duration-200'>
              <WorkOutDetails key={workout._id} workout={workout}/>
            </p>
          ))}
        </div>
    </div>
  )
}