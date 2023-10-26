import { create } from "zustand";
import {devtools, persist} from "zustand/middleware";

type Task = {
    title: string,
    state: string
}

const store = (set: any) => ({
    tasks: [],
    draggedTask: null,
    addTask: (title: string, state: string) => set((store: any) => ({tasks: [...store.tasks, {title, state}]}), false, "addTask"),
    deleteTask: (title: string) => set((store: any) => (
        {
            tasks: store.tasks.filter((task: Task) => task.title !== title)
        }
    ), false, "deleteTask"),
    setDraggedTask: (title: string|null) => set({draggedTask: title}, false, "setDraggedTask"),
    moveTask: (title: string, state: string) => set((store: any) => ({
        tasks: store.tasks.map((task: Task) => task.title === title? {
            title, state
        }: task)
    }), false, "moveTask")
});

// const log = (config) => (set, get, api) => config(
//     (...args) => {
//         console.log(args)
//         set(...args);
//     },
//     get, 
//     api
// );

export const useStore = create(persist(devtools(store), {name: "store"}));