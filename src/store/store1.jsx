import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const store1 = (set) => ({
    arr: [
        { id: 1, title: 'work 1', isCompleted: false },
        { id: 2, title: 'work 2', isCompleted: false },
    ],
    addArr: (newValue) => set((state) => ({
        arr: [...state.arr, { id: Date.now(), title: newValue, isCompleted: false }]
    })),
    delArr: (id) => set((state) => ({
        arr: state.arr.filter((item) => item.id !== id)
    })),
    confirmArr: (index) => set((state) => ({
        arr: state.arr.map((item, i) =>
            i === index ? { ...item, isCompleted: !item.isCompleted } : item
        )
    })),
    startEdit: (index) => set((state) => ({
        editIndex: index,
        editTxt: state.arr[index].title,
    })),
    saveEdit: (index, newValue) => set((state) => ({
        arr: state.arr.map((item, i) => i === index ? { ...item, title: newValue } : item),
        editIndex: null,
        editTxt: ''
    })),
    
})

const usePersist = {
    name: 'todo-store',
    getStorage: () => localStorage,
}

const useStore = create(persist(store1, usePersist))
export default useStore
