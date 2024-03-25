import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface IPoints {
    points: {
        task1: { success: number, error: number }
        task2: { success: number, error: number }
    };
    successPoints: number;
}

const initialState: IPoints = {
    points: {
        task1: { success: 0, error: 0 },
        task2: { success: 0, error: 0 }
    },
    successPoints: 0
};

interface ISetPoints {
    task: "task1" | "task2",
    success: boolean
}

export const pointsSlice = createSlice({
    name: 'points',
    initialState,
    reducers: {
        setPoints(state, action: PayloadAction<ISetPoints>) {
            const successCheck = action.payload.success ? 1 : 0;
            const errorCheck = action.payload.success ? 0 : 1;
            let task = state.points[action.payload.task];
            task = { success: task.success + successCheck, error: task.error + errorCheck };
            state.points[action.payload.task] = task
            if (action.payload.success) state.successPoints += 1
        },
    },
});

export default pointsSlice.reducer;
export const { setPoints } = pointsSlice.actions;