import { createSlice } from "@reduxjs/toolkit";

const allArticleSlice = createSlice({
    name:'allArticleSlice',
    initialState : {allArticles:[]},
    reducers:{
        setArticles(state,action){
            state.allArticles = action.payload
        },
        
    }
})


export const AllArticleActions = allArticleSlice.actions

export default allArticleSlice
