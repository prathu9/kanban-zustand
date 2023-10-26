import { create } from "zustand";

type Task = {
    title: string,
    state: string
}

const store = (set: any) => ({
    tasks: [{title: 'TestTask', state: 'ONGOING'}],
    draggedTask: null,
    addTask: (title: string, state: string) => set((store: any) => ({tasks: [...store.tasks, {title, state}]})),
    deleteTask: (title: string) => set((store: any) => (
        {
            tasks: store.tasks.filter((task: Task) => task.title !== title)
        }
    )),
    setDraggedTask: (title: string|null) => set({draggedTask: title})  
});

export const useStore = create(store);