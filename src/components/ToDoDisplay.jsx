import React from 'react'

const ToDoDisplay = (props) => {

    const updatedTasks = [...props.tasks]

    const strikeHandler = (i) => {
        updatedTasks[i].strike = !updatedTasks[i].strike
        props.handleUpdate(updatedTasks)
        console.log(updatedTasks[i].strike)
    }

    const deleteHandler = (index)=>{
        const filteredTasks = props.tasks.filter((task, i)=>i!==index)
        props.handleUpdate(filteredTasks)
    }

    return (
        <div>
            <table className="table text-warning">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Difficulty</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tasks.map((task, i) => {
                            return (
                                <tr key={i}>
                                    <td> {i + 1} </td>
                                    <td style={{ textDecoration: task.strike ? "line-through" : "" }}>{task.task}</td>
                                    <td>{task.difficulty}</td>
                                    <td><input type="checkbox" className="form-check-input" checked={task.strike}
                                        onChange={(e) => strikeHandler(i)}
                                    /><button className="btn btn-warning mt-1  ms-2 mb-3" onClick={()=>deleteHandler(i)}>Delete</button></td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ToDoDisplay