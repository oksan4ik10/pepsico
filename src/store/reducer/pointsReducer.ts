import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface IPoints {
    points: {
        task1: { success: number, error: number, error2: number }
        task2: { success: number, error: number, error2: number }
    };
    successPoints: number;
}

const initialState: IPoints = {
    points: {
        task1: { success: 0, error: 0, error2: 0 },
        task2: { success: 0, error: 0, error2: 0 }
    },
    successPoints: 0
};

interface ISetPoints {
    task: "task1" | "task2",
    success: boolean
}
interface ISetPointsTask2 {
    side: "left" | "right",
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
            task = { success: task.success + successCheck, error: task.error + errorCheck, error2: 0 };
            state.points["task1"] = task
            if (action.payload.success) state.successPoints += 1
        },
        setPointsTask2(state, action: PayloadAction<ISetPointsTask2>) {
            const successCheck = action.payload.success ? 1 : 0;
            const error1Check = (!action.payload.success && (action.payload.side === "right")) ? 1 : 0;
            const error2Check = (!action.payload.success && (action.payload.side === "left")) ? 1 : 0;
            let task = state.points["task2"];
            task = { success: task.success + successCheck, error: task.error + error1Check, error2: task.error2 + error2Check };
            state.points["task2"] = task
            if (action.payload.success) state.successPoints += 1

        }
    },
});

export default pointsSlice.reducer;
export const { setPoints, setPointsTask2 } = pointsSlice.actions;