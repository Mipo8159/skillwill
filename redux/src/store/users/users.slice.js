import { getUsers } from "./users.thunks"

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    users: [],
    loading: false,
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState, 
    reducers: {},
    extraReducers: {
        [getUsers.pending.type]:(state) => {
            state.loading = true
        },
        [getUsers.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.users = action.payload;
        },
        [getUsers.rejected.type]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default usersSlice.reducer