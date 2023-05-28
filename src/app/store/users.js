import { createAction, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import customHistory from "../utils/history";
// import httpService from "../services/http.service";

const initialState = localStorageService.getAccessToken()
    ? {
        entities: null,
        isLoading: true,
        error: null,
        auth: { userId: localStorageService.getUserId() },
        isLoggedIn: true,
        dataLoaded: false
    }
    : {
        entities: null,
        isLoading: false,
        error: null,
        auth: null,
        isLoggedIn: false,
        dataLoaded: false
    };

const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        // actions:
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        // authRequested, // createAction("users/authRequested");
        // authRequested: (state) => {
        //     state.error = null;
        // },
        authRequestSucceeded: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload.error;
        },
        userCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        // userEditRequested, // createAction("users/userEditRequested")
        userEditSucceeded: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities[state.entities.findIndex((user) =>
                user._id === action.payload._id
            )] = action.payload;
        },
        // userEditFailed, // createAction("users/userEditFailed");
        userLoggedOut: (state, action) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;

const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    authRequestSucceeded,
    authRequestFailed,
    // userCreated,
    userEditSucceeded,
    userLoggedOut
} = actions;

const authRequested = createAction("users/authRequested");
const userEditRequested = createAction("users/userEditRequested");
const userEditFailed = createAction("users/userEditFailed");

export const login = ({ payload, redirect }) => async (dispatch) => {
    const { email, password } = payload;
    dispatch(authRequested());
    try {
        const data = await authService.login({ email, password });
        localStorageService.setTokens(data);
        dispatch(authRequestSucceeded({ userId: data.userId }));
        customHistory.push(redirect);
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const logout = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
    customHistory.push("/login");
};

export const editUserInfo = (payload) => async (dispatch) => {
    dispatch(userEditRequested());
    try {
        const { content } = await userService.edit(payload);
        dispatch(userEditSucceeded(content));
        customHistory.push(`/users/${content._id}`);
    } catch (error) {
        dispatch(userEditFailed(error.message));
    }
};

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.register(payload);
        localStorageService.setTokens(data);
        dispatch(authRequestSucceeded({ userId: data.userId }));
        history.push("/");
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.get();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

// селекторы:
export const getUsersList = () => (state) => state.users.entities;
export const getUserById = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find(user => user._id === userId);
    }
};
export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getCurrentUserData = () => (state) => {
    return state.users.entities
        ? state.users.entities.find((user) => user._id === state.users.auth.userId)
        : null;
};

export default usersReducer;
