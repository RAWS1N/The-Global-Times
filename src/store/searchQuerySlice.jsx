import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice = createSlice({
    name:"searchQuery",
    initialState:{query:''},
    reducers:{
        changeQuery(state,action){
            state.query = action.payload
        }
    }
})


export const SearchActions = searchQuerySlice.actions
export default searchQuerySlice