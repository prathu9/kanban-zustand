import Task from "./Task"
import "./Column.css"

type ColumnProps = {
    state: string
}

const Column = ({state}: ColumnProps) => {
    return(
        <div className="column">
            {state}
            <Task title="todo"/>
        </div>
    )
}

export default Column;