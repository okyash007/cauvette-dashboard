import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice(
    {
        name: "products",
        initialState: {
            data: {
                rank: 124352,
                score: 12,
                percentile: 37
            }
        },
        reducers: {
            addData: (state, action) =>{
                state.data = action.payload;
            }
        }
    }
)

export const { addData } = dataSlice.actions

export default dataSlice.reducer;

