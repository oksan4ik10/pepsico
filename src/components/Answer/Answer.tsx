import style from "./Answer.module.css"

import { IDataTask1 } from "../../type"

import urlIcon from "../../assets/icon-answer.svg"
import urlPhoto from "../../assets/hr-photo.png"
import urlSuccessAnswer from "../../assets/success-answer.png"

interface IProps {
    changeTaskNum: () => void;
    isSuccess: boolean;
    closeAnswer: () => void;
    taskInfo: IDataTask1
}


function Answer(props: IProps) {
    const { closeAnswer, taskInfo, isSuccess } = props;
    const clickNext = () => {
        closeAnswer();
    }
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.photo}>
                    <img src={urlPhoto} alt="hrPhoto" />
                    <div className={style.photo__circle}><img src={urlIcon} alt="icon" /></div>
                    <div className={style.photo__circle}><img src={urlIcon} alt="icon" /></div>
                    <div className={style.photo__circle}><img src={urlIcon} alt="icon" /></div>
                    <div className={style.photo__circle}><img src={urlIcon} alt="icon" /></div>
                </div>
                <div className={style.answer}>
                    <img src={urlSuccessAnswer} alt="answer" />
                </div>
                <div className={style.text} dangerouslySetInnerHTML={isSuccess ? { __html: taskInfo.success } : { __html: taskInfo.error }}></div>
            </div>

            <button className={style.btn} onClick={clickNext}>Дальше</button>

        </div>
    );
}

export default Answer;