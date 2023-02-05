import { RiDeleteBin6Line } from 'react-icons/ri'

export const WorkOutDetails = ({workout}) => {

  const handleClick = () => {

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
          className='mr-10'
          onClick={handleClick}
        >
          <RiDeleteBin6Line size={30}/>
        </div>
    </div>
  )
}
