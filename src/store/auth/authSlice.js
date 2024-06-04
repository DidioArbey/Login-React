import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',//'not-authenticated', 'authenticad','checking'
        uid: null,
        email: null,
        diplayName: null,
        photoURL: null,
        erroMessage: null
    },
    reducers: {
        login: (state,action)=>{

        },
        logout: ( state, payload) =>{

        },
        chekingCredentials: (state) => {
            
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;