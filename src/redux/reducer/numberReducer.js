import { createSlice } from "@reduxjs/toolkit";

const testReducer = createSlice({
    name: 'test',
    initialState: {
        test: [1, 2, 3]
    },
    reducers: {
        pushNumber: (state, action) => {
            state.test.push(action.payload)
        },
        getNumber: (state, action) => {
            state.test = action.payload
        }
    }
})

export default testReducer





