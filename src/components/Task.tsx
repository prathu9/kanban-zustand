import classNames from "classnames"
import "./Task.css"

type TaskProps = {
    title: string
}

const STATUS = 'PLANNED'

const Task = ({title}: TaskProps) =>{
    return (
        <div className="task">
            <div>{title}</div>
            <div className="bottomWrapper">
                <div></div>
                <div className={classNames('status',STATUS)}>{STATUS}</div>
            </div>
        </div>
    )
}

export default Task;