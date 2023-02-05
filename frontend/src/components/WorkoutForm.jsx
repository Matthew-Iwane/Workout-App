import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

export const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [empty, setEmpty] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = {title, load, reps};
        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmpty(json.empty);
        }
        if (response.ok) {
            setError(null);
            setTitle('');
            setLoad('');
            setReps('');
            setEmpty([]);
            dispatch({type: 'CREATE_WORKOUT', payload: json});
            console.log('New workout has been added');
        }
    }


    return (
        <div>
            <div className='m-4 flex flex-col items-center'>
                <h1 className='uppercase tracking-wider text-2xl'>Add Workout</h1>
                <form 
                    className='flex flex-col gap-4 w-full'
                    onSubmit={handleSubmit}
                >
                    <label><b>Exercise Name: </b></label>
                    <input 
                        className= {empty.includes('title') ? 'border border-red-500 rounded shadow-sm py-1 px-2' : 'rounded shadow-sm py-1 px-2'}
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    
                    <label><b>Weight Amount: </b></label>
                    <input 
                        className= {empty.includes('load') ? 'border border-red-500 rounded shadow-sm py-1 px-2' : 'rounded shadow-sm py-1 px-2'}
                        type="number" 
                        onChange={(e) => setLoad(e.target.value)}
                        value={load}
                    />

                    <label><b>Number of reps: </b></label>
                    <input 
                        className= {empty.includes('reps') ? 'border border-red-500 rounded shadow-sm py-1 px-2' : 'rounded shadow-sm py-1 px-2'}
                        type="number" 
                        onChange={(e) => setReps(e.target.value)}
                        value={reps}
                    />
                    <button className='shadow-md rounded py-2 ext-white font-semibold bg-blue-400 hover:bg-blue-600 duration-200 text-white'>
                        Add Workout
                    </button>

                    {error && <div className='text-red-600 text-lg'>{error} </div>}
                </form>
            </div>
        </div>
    )
}
