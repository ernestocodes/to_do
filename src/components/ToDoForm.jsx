import React, {useState} from 'react'

//input -> 1. usestate 2. initiate the state 3. eventhandler
// form -> 1. create function for submit 2. e.preventDefault 3. attach eventHandler
const ToDoForm = (props) => {
    const [task, setTask]= useState("")
    const [difficulty, setDifficulty] = useState("")
    const strike = false

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({task, difficulty, strike})
        props.onNewTask({task, difficulty, strike})
        setTask("")
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">Task</label>
                    <input type="text" name="task" onChange={(e)=>setTask(e.target.value)} className="form-control" value={task}/>
                </div>
                <div>
                    <label className="form-label mt-3">Difficulty</label>
                    <select name="difficulty" onChange={(e)=>setDifficulty(e.target.value)} className="form-control">
                        <option hidden/>
                        <option value="Easy">Easy</option>
                        <option value="Average">Average</option>
                        <option value="Difficult">Difficult</option>
                    </select>
                </div>
                <button className="btn btn-warning mt-3 mb-3">Submit</button>
            </form>
        </div>
    )
}

export default ToDoForm