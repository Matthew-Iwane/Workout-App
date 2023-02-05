import { useState,useEffect } from 'react'
import { WorkOutDetails } from '../components/WorkOutDetails';


export const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    }
    fetchWorkout()
  },[])

  return (
    <div>
        <div>
          {workouts && workouts.map((workout) => (
            <p>
              <WorkOutDetails key={workout._id} workout={workout}/>
            </p>
          ))}
        </div>
    </div>
  )
}