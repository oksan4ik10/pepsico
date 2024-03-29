import { useRef, useState } from "react";

import Answer from "../../components/Answer/Answer";
import Task2Question from "../../components/Task2Question/Task2Question";

import data from "../../data/questionTask2.json"

import style from "./Task2.module.css"


interface IProps {
    changeScreen: (screen: number) => void;
}
const Task2 = (props: IProps) => {

    const { changeScreen } = props;

    const taskElem = useRef<HTMLDivElement>(null);


    const [taskNum, setTaskNum] = useState(0); //для смены вопросов в таске2
    const [isSuccess, setIsSuccess] = useState(false);

    const [infoTask, setInfoTask] = useState(data[0]);


    const closeAnswer = () => {
        setIsReverse(false)
        setTaskNum(taskNum + 1);
        setInfoTask(data[taskNum + 1]);
        if (taskNum === 1) changeScreen(2) //условие на количество вопросов

    }

    const changeSetIsSuccess = (n: boolean) => {
        setIsSuccess(n);
    }




    const [isReverse, setIsReverse] = useState(false); //свайп влево (true) или вправо(false)
    const clickTest = (answer: "left" | "right") => {
        if (taskElem.current) {
            taskElem.current.style.setProperty("--width-task", `-${taskElem.current.clientWidth}px`);
            if (answer === "left") setIsReverse(true)
            else setIsReverse(false)

        }

    }
    return (
        <div className={style.task + " " + (isReverse ? style.reverse : "")} ref={taskElem} key={taskNum}>
            <div className={style.slide1}>
                <Task2Question infoTask={infoTask} setAnswer={clickTest} changeSetIsSuccess={changeSetIsSuccess}></Task2Question>
            </div>
            <div className={style.slide2}>
                <Answer task2Info={infoTask} closeAnswer={closeAnswer} isSuccess={isSuccess} task="task2" ></Answer>
            </div>



        </div>
    );
};

export default Task2;