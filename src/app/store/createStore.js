import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";
// import articlesReducer from "./articles";
import categoriesReducer from "./categories";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
    users: usersReducer,
    // articles: articlesReducer,
    categories: categoriesReducer,
    comments: commentsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
};