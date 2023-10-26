import classNames from "classnames"
import "./Task.css"
import { useStore } from "../store"
import {BsFillTrash3Fill} from "react-icons/bs"

type TaskProps = {
    title: string
}

type Task = {
    title: string,
    state: string
}

const Task = ({title}: TaskProps) =>{   
    const task = useStore(store => store.tasks.find(task => task.title === title)) as Task;

    const deleteTask = useStore(store => store.deleteTask);

    return (
        <div className="task" draggable>
            <div>{task!.title}</div>
            <div className="bottomWrapper">
                <div className="deleteIconWrapper">
                    <BsFillTrash3Fill onClick={() => deleteTask(task.title)}/>
                </div>
                <div className={classNames('status',task.state)}>{task.state}</div>
            </div>
        </div>
    )
}

export default Task;