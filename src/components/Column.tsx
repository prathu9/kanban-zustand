import Task from "./Task"
import {useMemo} from "react"
import "./Column.css"
import { useStore } from "../store"

type ColumnProps = {
    state: string
}

const Column = ({state}: ColumnProps) => {
    const tasks = useStore(store => store.tasks)

    // React way to filter without unecessary rerendering
    const filteredTasks = useMemo(() => tasks.filter(task => task.state === state), [tasks, state])

    console.log(tasks, filteredTasks)

    return(
        <div className="column">
            <div className="titleWrapper">
                <p>{state}</p>
                <button>Add</button>
            </div>
            {filteredTasks.map((task) => (
                <Task title={task.title} key={task.title}/>
            ))}
        </div>
    )
}

export default Column;