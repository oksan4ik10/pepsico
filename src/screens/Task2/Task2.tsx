import { useState } from "react";

import Answer from "../../components/Answer/Answer";
import Task2Question from "../../components/Task2Question/Task2Question";

import data from "../../data/questionTask2.json"

import style from "./Task2.module.css"


interface IProps {
    changeScreen: () => void;
}
const Task2 = (props: IProps) => {

    const { changeScreen } = props;



    const [taskNum, setTaskNum] = useState(0); //для смены вопросов в таске2
    const [isSuccess, setIsSuccess] = useState(false);

    const [infoTask, setInfoTask] = useState(data[0]);


    const closeAnswer = () => {
        setTaskNum(taskNum + 1);
        setInfoTask(data[taskNum + 1]);
        if (taskNum === 10) changeScreen() //условие на количество вопросов

    }

    const changeSetIsSuccess = (n: boolean) => {
        setIsSuccess(n);
    }





    return (
        <div className={style.task} key={taskNum}>

            <Task2Question changeSetIsSuccess={changeSetIsSuccess} infoTask={infoTask}></Task2Question>

            <div className={style.slide2}>
                <Answer task2Info={infoTask} closeAnswer={closeAnswer} isSuccess={isSuccess} task="task2" ></Answer>
            </div>



        </div>
    );
};

export default Task2;