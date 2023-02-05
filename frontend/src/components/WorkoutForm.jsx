import { useState } from 'react'

export const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);


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

        const json = await response.json;

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setError(null);
            setTitle('');
            setLoad('');
            setReps('');
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
                    <label>Exercise Title: </label>
                    <input 
                        className='rounded shadow-sm py-1'
                        name="title"
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    
                    <label>Exercise Weight Amount: </label>
                    <input 
                        className='rounded shadow-sm py-1'
                        name="load"
                        type="text" 
                        onChange={(e) => setLoad(e.target.value)}
                        value={load}
                    />

                    <label>Number of reps: </label>
                    <input 
                        className='rounded shadow-sm py-1'
                        name="reps"
                        type="text" 
                        onChange={(e) => setReps(e.target.value)}
                        value={reps}
                    />
                    <button className='shadow-md rounded py-2 bg-red-400 text-white hover:bg-red-600 duration-150'>
                        Add Workout
                    </button>

                    {error && <div>{error} </div>}
                </form>
            </div>
        </div>
    )
}
