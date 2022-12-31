import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice  = createSlice({
    name:'darkMode',
    initialState:{dark:false},
    reducers:{
        toggleDarkMode(state){
            state.dark = !state.dark
        }
       
    }
})

export const darkModeActions = darkModeSlice.actions
export default darkModeSlice