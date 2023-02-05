import { RiDeleteBin6Line } from 'react-icons/ri'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

export const WorkOutDetails = ({workout}) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })

    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json});
    }
  }

  return (
    <div className='flex justify-between items-center'>
        <div className='m-4 h-auto'>
            <p className='uppercase tracking-wider font-semibold sm:text-2xl text-lg text-blue-500'>{workout.title}</p>
            <p><b>Weight(lbs): </b>{workout.load}</p>
            <p><b>Repetitions: </b>{workout.reps}</p>
            <p className= 'font-thin'>{workout.createdAt}</p>
        </div>
        <div 
          className='mr-10 cursor-pointer hover:scale-125 duration-300'
          onClick={handleClick}
        >
          <RiDeleteBin6Line size={30}/>
        </div>
    </div>
  )
}
