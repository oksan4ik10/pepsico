import { useAppSelector } from "../../store/store"

import { IDataTask1 } from "../../type"
import { dataHRTask1 } from "../../data/hrAnswerTask1"

import style from "./Answer.module.css"


import urlSuccessAnswer from "../../assets/success-answer.png"
import urlErrorAnswer from "../../assets/error-answer.png"

interface IProps {
    changeTaskNum: () => void;
    isSuccess: boolean;
    closeAnswer: () => void;
    taskInfo: IDataTask1;
    task: "task1" | "task2"
}


function Answer(props: IProps) {
    const { closeAnswer, taskInfo, isSuccess, task } = props;

    const numAnswer = useAppSelector((store) => store.pointsReducer).points[task];
    const dataNumHr = isSuccess ? numAnswer.success : numAnswer.error
    const dataHR = dataHRTask1(isSuccess, dataNumHr - 1)


    const clickNext = () => {
        closeAnswer();
    }
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.photo + " " + (isSuccess ? "" : style.error)}>
                    <img src={dataHR[0]} alt="hrPhoto" />
                    <div className={style.photo__circle}><img src={dataHR[1]} alt="icon" /></div>
                    <div className={style.photo__circle}><img src={dataHR[1]} alt="icon" /></div>
                    <div className={style.photo__circle}><img src={dataHR[1]} alt="icon" /></div>
                    <div className={style.photo__circle}><img src={dataHR[1]} alt="icon" /></div>
                </div>
                <div className={style.answer}>
                    <img src={isSuccess ? urlSuccessAnswer : urlErrorAnswer} alt="answer" />
                </div>
                <div className={style.text} dangerouslySetInnerHTML={isSuccess ? { __html: taskInfo.success } : { __html: taskInfo.error }}></div>
            </div>

            <button className={style.btn} onClick={clickNext}>Дальше</button>

        </div>
    );
}

export default Answer;