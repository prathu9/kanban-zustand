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

    const addTask = useStore(store => store.addTask);
console.log(state)
    return(
        <div className="column">
            <div className="titleWrapper">
                <p>{state}</p>
                <button onClick={() => {addTask('asdsa'+state, state)}}>Add</button>
            </div>
            {filteredTasks.map((task) => (
                <Task title={task.title} key={task.title}/>
            ))}
        </div>
    )
}

export default Column;