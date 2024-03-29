import { useAppSelector, useAppDispatch } from '../../store/store';
import { setPoints } from '../../store/reducer/pointsReducer';

import Persona from '../Persona/Persona';
import urlArrow from "../../assets/arrow2.svg"

import style from "./Task2Question.module.css"
import { IDataTask2 } from '../../type';

interface IProps {
    setAnswer: (answer: "left" | "right") => void
    infoTask: IDataTask2
    changeSetIsSuccess: (n: boolean) => void
}

const Task2Question = (props: IProps) => {
    const { setAnswer, infoTask, changeSetIsSuccess } = props;
    const sex = useAppSelector((store) => store.sexReducer).sex;

    const dispatch = useAppDispatch();



    const selectAnswer = (s: "left" | "right") => {
        const isSuccess = infoTask.correct2 === s;
        dispatch(setPoints({
            task: "task2",
            success: isSuccess
        }))
        changeSetIsSuccess(isSuccess)

        setAnswer(s);
    }


    return (
        <div className={style.wrapper}>
            <div className={style.task__wrapper}>
                <Persona sex={sex}></Persona>
                <div className={style.question}>
                    <p className={style.text} dangerouslySetInnerHTML={{ __html: infoTask.question }} />
                </div>
            </div>
            <div className={style.arrows}>
                <div className={style.arrow + " " + style.arrow__left} onClick={() => selectAnswer("left")}>
                    <img src={urlArrow} alt="arrow__left" />
                    <span>Не спрашиваю</span>

                </div>
                <div className={style.arrow + " " + style.arrow__right} onClick={() => selectAnswer("right")}>
                    <span>Спрашиваю</span>
                    <img src={urlArrow} alt="arrow__right" />
                </div>
            </div>
        </div>
    );
};

export default Task2Question;