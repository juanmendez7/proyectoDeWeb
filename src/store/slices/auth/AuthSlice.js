import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "checking",
        uid: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers: {
        register: (state, action) => {
            state.email = action.playload.email
        },
        logout: (state, action) => {

        },
        checkingCredentials: (state,action) => {
            console.log("checking")
        }
    }
})

export const { login, logout, checkingCredentials, } = authSlice.actions