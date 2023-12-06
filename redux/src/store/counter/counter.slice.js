import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
    }
})

export const {increment, decrement} = counterSlice.actions
export const baseSelector = (state) => state.counter
export const counterSelector = createSelector(
    baseSelector, (counter) => counter.count
)

export default counterSlice.reducer