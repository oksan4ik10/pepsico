import { useRef, useState } from "react";

import Answer from "../../components/Answer/Answer";
import Task2Question from "../../components/Task2Question/Task2Question";

import style from "./Task2.module.css"

const Task2 = () => {
    const taskElem = useRef<HTMLDivElement>(null);
    const [isReverse, setIsReverse] = useState(false); //свайп влево (true) или вправо(false)
    const clickTest = () => {
        if (taskElem.current) {
            taskElem.current.style.setProperty("--width-task", `-${taskElem.current.clientWidth}px`);
            setIsReverse(false)

        }

    }
    return (
        <div className={style.task + " " + (isReverse ? style.reverse : "")} onClick={clickTest} ref={taskElem}>
            <div className={style.slide1}>
                <Task2Question></Task2Question>
            </div>
            <div className={style.slide2}>
                <Answer changeTaskNum={() => { }} closeAnswer={() => { }} isSuccess={true} task="task2" ></Answer>
            </div>



        </div>
    );
};

export default Task2;