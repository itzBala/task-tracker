import Task from "./Task"

const Tasks = (props) => {
    return (
        <>
        {
            props.tasks.map((task, index) => (
                <Task key={index} task={task} deleteTask={props.deleteTask} toggleReminder={props.toggleReminder} />
            ))
        }  
        </>
    )
}

export default Tasks