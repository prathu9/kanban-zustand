import Task from "./Task";
import { useMemo, useState } from "react";
import "./Column.css";
import { useStore } from "../store";

type ColumnProps = {
  state: string;
};

const Column = ({ state }: ColumnProps) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const tasks = useStore((store) => store.tasks);

  // React way to filter without unecessary rerendering
  const filteredTasks = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state]
  );

  const addTask = useStore((store) => store.addTask);

  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {filteredTasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
      {open ? (
        <div className="modal">
          <div className="modalContent">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Column;
