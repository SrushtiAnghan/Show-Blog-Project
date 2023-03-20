import { createSlice } from "@reduxjs/toolkit";

const initialState = "hello"
export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        Dasboard: (state, action) => {

            return {
                state: action.payload

            }
        }
    }
})
export const { Dasboard } = blogSlice.actions;
export default blogSlice.reducer;





