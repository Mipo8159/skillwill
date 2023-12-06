import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    '/users/GET',
    async (_, ThunkAPI) => {
        try {
            const res = await fetch('api/v1/users', {
                headers: {
                    'Content-Type': "application/json",
                    authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
            const data = await res.json()
            if(data) return ThunkAPI.fulfillWithValue(data.items)
        } catch (error) {
            return ThunkAPI.rejectWithValue('Something went wrong')
        }
    }
)