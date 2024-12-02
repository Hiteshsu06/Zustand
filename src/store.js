import { create } from "zustand";

const store = (set, get)=> ({
    data: [],
    total: 0,
    getData: {},
    addData: (data) => {
        set((state)=>({
            data: [...state.data, {...data}]
        }))
    },
    deleteData: (indexToDelete) => {
        set((state)=>({
            data: state.data?.filter((_, index)=> index !== indexToDelete)
        }))
    },
    setParticularData: (ind) => {
        set((state)=>({
            getData: state.data?.find((_, index)=> index === ind)
        }))
    },
    updateData: (data, ind) => {
        // get().data -- TO GET DATA OF STATE INTERNALLY
        set((state)=>{
            let cloneData = structuredClone(state.data);
            cloneData[ind] = data;
            return {...state, data: cloneData};
        })
    }
})

const useStore  = create(store);
export default useStore;