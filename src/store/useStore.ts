// src/store/useStore.ts
import { create } from 'zustand';

interface StoreState {
    data: any[];
    setData: (data: any[]) => void;
}
interface CounterState {
    counter: number;
    increment: (qty:number) => void;
    decrement: (qty:number) => void;
    resetCounter: () => void;
}

export const useStore = create<StoreState>((set) => ({
    data: [],
    setData: (data) => set({ data }),
}));



export const useCounterStore = create<CounterState>((set) => ({
    counter: 0,
    increment: (qty) => set((state) => ({ counter: state.counter + qty })),
    decrement: (qty) => set((state) => ({ counter: state.counter - qty })),
    resetCounter: () => set({ counter: 0 }),
}));