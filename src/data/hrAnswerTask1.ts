import { hrTask1ArrSuccess, hrTask1ArrError, iconTask1Error, iconTask1Success } from "./hrTaskqArr1"

import { hrTask2ArrSuccess, hrTask2ArrError, iconTask2Error, iconTask2Success, hrTask2ArrError2, iconTask2Error2 } from "./hrTaskqArr2"

export const dataHRTask = (success: boolean, num: number, task: "task1" | "task2", task2Check: number) => {
    return (task === "task1" && success) ? [hrTask1ArrSuccess[num], iconTask1Success[num]] : (task === "task1") ? [hrTask1ArrError[num], iconTask1Error[num]] : success ? [hrTask2ArrSuccess[num], iconTask2Success[num]] : (task2Check === 4) ? [hrTask2ArrError[num], iconTask2Error[num]] : [hrTask2ArrError2[num], iconTask2Error2[num]];
} 