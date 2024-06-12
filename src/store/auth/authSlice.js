import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',//'not-authenticated', 'authenticad','checking'
        uid: null,
        email: null,
        diplayName: null,
        photoURL: null,
        erroMessage: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated',
            state.uid = payload.uid;
            state.email = payload.email;
            state.diplayName = payload.diplayName;
            state.photoURL = payload.photoURL;
            state.erroMessage = null;

        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated',
            state.uid = null;
            state.email = null;
            state.diplayName = null;
            state.photoURL = null;
            state.erroMessage = payload.erroMessage;

        },
        chekingCredentials: (state) => {
            state.status = 'cheking'
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;