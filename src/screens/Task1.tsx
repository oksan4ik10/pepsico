import { useState } from "react";

import { useAppSelector } from "../store/store";

import Task1Question from "../components/Task1Question/Task1Question";
import Answer from "../components/Answer/Answer";





import data from "../data/questionTask1.json"
import { ITask } from "../type";

interface IProps {
    changeScreen: () => void
}

function Task1(props: IProps) {
    const { changeScreen } = props;

    const [taskNum, setTaskNum] = useState(0); //для смены вопросов в таске1
    const [isSuccess, setIsSuccess] = useState(false);//запомнить правильный/не правильный ответ

    const sex = useAppSelector((store) => store.sexReducer).sex;

    const [isAnswer, setIsAnswer] = useState(false);

    const changeTaskNum = () => { setTaskNum(taskNum + 1) }
    const changeSetIsSuccess = (n: boolean) => {
        setIsSuccess(n);
        setIsAnswer(true);
    }



    const closeAnswer = () => {
        changeTaskNum();
        setIsAnswer(false)
        if (taskNum === 8) changeScreen() //условие на количество вопросов

    }

    const taskInfo = data[taskNum][sex] as ITask;

    return (<>
        {!isAnswer && <Task1Question taskInfo={taskInfo} changeSetIsSuccess={changeSetIsSuccess}></Task1Question>}
        {isAnswer && <Answer task="task1" isSuccess={isSuccess} task1Info={taskInfo} closeAnswer={closeAnswer}></Answer>}
    </>

    );
}

export default Task1;