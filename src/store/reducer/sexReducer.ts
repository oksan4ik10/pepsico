import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TSex = "men" | "woman"
export interface ISex {
    sex: TSex
}

const initialState: ISex = {
    sex: "woman"
};




export const sexSlice = createSlice({
    name: 'sex',
    initialState,
    reducers: {
        setSex(state, action: PayloadAction<TSex>) {
            state.sex = action.payload;
        },
    },
});

export default sexSlice.reducer;
export const { setSex } = sexSlice.actions;