import { useState } from "react";

import Task1Question from "../components/Task1Question/Task1Question";
import Answer from "../components/Answer/Answer";



import data from "../data/questionTask1.json"

interface IProps {
    changeScreen: (n: number) => void
}

function Task1(props: IProps) {
    const { changeScreen } = props;

    const [taskNum, setTaskNum] = useState(0); //для смены вопросов в таске1
    const [isSuccess, setIsSuccess] = useState(false);//запомнить правильный/не правильный ответ

    const [isAnswer, setIsAnswer] = useState(false);

    const changeTaskNum = () => { setTaskNum(taskNum + 1) }
    const changeSetIsSuccess = (n: boolean) => {
        setIsSuccess(n);
        setIsAnswer(true);
    }



    const closeAnswer = () => {
        changeTaskNum();
        setIsAnswer(false)
        if (taskNum === 1) changeScreen(3)

    }

    return (<>
        {!isAnswer && <Task1Question taskInfo={data[taskNum]} changeSetIsSuccess={changeSetIsSuccess}></Task1Question>}
        {isAnswer && <Answer task="task1" isSuccess={isSuccess} taskInfo={data[taskNum]} changeTaskNum={changeTaskNum} closeAnswer={closeAnswer}></Answer>}
    </>

    );
}

export default Task1;