export interface ITask {
    question: string;
    answer1: string;
    answer2: string;
    answer1Check: string;
    answer2Check: string;
    correct2: string;
    success: string;
    error: string;
    fontSize?: boolean
}
export interface IDataTask1 {
    woman: ITask,
    men: ITask

}

export interface IDataTask2 {
    question: string;
    correct2: string;
    answer: string;
    fontSize?: boolean;
}