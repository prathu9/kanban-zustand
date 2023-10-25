import { create } from "zustand";

const store = (set: any) => ({
    tasks: [{title: 'TestTask', state: 'ONGOING'}]
});

export const useStore = create(store);