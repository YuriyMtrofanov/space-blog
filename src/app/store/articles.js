import { createAction, createSlice } from "@reduxjs/toolkit";
import articleService from "../services/article.service";

const articleSlice = createSlice({
    name: "articles",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        // запрос на получение данных:
        articlesRequested: (state) => {
            state.isLoading = true;
        },
        articlesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        articlesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        // создание данных:
        // articleCreateRequested, // createAction("articles/articleCreateRequested");
        articleCreated: (state, action) => {
            state.entities.push(action.payload);
        },
        // articleCreateFailed, // createAction("articles/articleCreateFailed");
        // редактирование данных:
        // articleEditRequested, // createAction("articles/articleEditRequested");
        articleEdited: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities[state.entities.findIndex((article) =>
                article._id === action.payload._id
            )] = action.payload;
        },
        // articleEditFailed, // createAction("articles/articleEditFailed");

        // удаление данных:
        // articleRemoveRequested, // createAction("articles/articleRemoveRequested");
        articleRemoved: (state, action) => {
            state.entities = state.entities.filter(article => article._id !== action.payload);
        }
        // articleRemoveFailed, // createAction("articles/articleRemoveFailed");
    }
});

const { reducer: articlesReducer, actions } = articleSlice;
const {
    articlesRequested,
    articlesReceived,
    articlesRequestFailed,
    articleCreated,
    articleEdited,
    articleRemoved
} = actions;

const articleCreateRequested = createAction("articles/articleCreateRequested");
const articleCreateFailed = createAction("articles/articleCreateFailed");
const articleEditRequested = createAction("articles/articleEditRequested");
const articleEditFailed = createAction("articles/articleEditFailed");
const articleRemoveRequested = createAction("articles/articleRemoveRequested");
const articleRemoveFailed = createAction("articles/articleRemoveFailed");

export const loadArticlesList = () => async (dispatch) => {
    dispatch(articlesRequested());
    try {
        const { content } = await articleService.get();
        dispatch(articlesReceived(content));
    } catch (error) {
        dispatch(articlesRequestFailed(error.message));
    }
};

export const createArticle = (payload) => async (dispatch) => {
    dispatch(articleCreateRequested());
    try {
        const { content } = await articleService.create(payload);
        dispatch(articleCreated(content));
    } catch (error) {
        dispatch(articleCreateFailed(error.message));
    }
};

export const editArticleInfo = (articleId, payload) => async (dispatch) => {
    dispatch(articleEditRequested());
    try {
        const { content } = await articleService.edit(articleId, payload);
        dispatch(articleEdited(content));
    } catch (error) {
        dispatch(articleEditFailed(error.message));
    }
};

export const removeArticle = (articleId) => async (dispatch) => {
    dispatch(articleRemoveRequested());
    try {
        const { content } = await articleService.delete(articleId);
        if (!content) {
            dispatch(articleRemoved(articleId));
        }
    } catch (error) {
        dispatch(articleRemoveFailed(error.message));
    }
};

// селекторы:
export const getArticlesList = () => (state) => state.articles.entities;
export const getArticById = (articleId) => (state) => {
    if (state.articles.entities) {
        return state.articles.entities.find(article => article._id === articleId);
    }
};
export const getArticlesLoadStatus = () => (state) => state.comments.isLoading;

export default articlesReducer;
