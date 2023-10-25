import { create } from "zustand";

const store = (set: any) => ({
    tasks: [{title: 'TestTask', state: 'ONGOING'}],
    addTask: (title: string, state: string) => set((store: any) => ({tasks: [...store.tasks, {title, state}]}))
});

export const useStore = create(store);