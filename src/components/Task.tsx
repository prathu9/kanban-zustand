import classNames from "classnames"
import "./Task.css"
import { useStore } from "../store"
import {BsFillTrash3Fill} from "react-icons/bs"

type TaskProps = {
    title: string
}

const Task = ({title}: TaskProps) =>{   
    const task = useStore(store => store.tasks.find(task => task.title === title));

    return (
        <div className="task">
            <div>{task!.title}</div>
            <div className="bottomWrapper">
                <div className="deleteIconWrapper">
                    <BsFillTrash3Fill onClick={() => console.log("check")}/>
                </div>
                <div className={classNames('status',task!.state)}>{task!.state}</div>
            </div>
        </div>
    )
}

export default Task;