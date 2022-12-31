import { configureStore } from "@reduxjs/toolkit";
import allArticleSlice from "./allArticleSlice";
import categorySlice from "./categorySlice";
import darkModeSlice from "./darkModeSlice";
import searchQuerySlice from "./searchQuerySlice";


const store = configureStore({
    reducer:{
        darkMode : darkModeSlice.reducer,
        allArticle : allArticleSlice.reducer,
        searchQuery:searchQuerySlice.reducer,
        category:categorySlice.reducer
    }
})



export default store