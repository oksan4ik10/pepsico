import { useState } from 'react';
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

    let x1 = 0, x2 = 0;
    const startTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        x1 = e.touches[0].clientX;
    }

    const moveTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        x2 = e.touches[0].clientX;
    }
    const endTouch = () => {
        end()
    }

    const [isStartMouse, setIsStartMouse] = useState(false);
    const [xValue, setX] = useState(0);
    const mouseStart = (e: React.MouseEvent<HTMLDivElement>) => {
        x1 = e.pageX;
        setX(x1);
        setIsStartMouse(true);
    }
    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isStartMouse) return
        x2 = e.pageX;
    }

    const mouseEnd = () => {
        if (!isStartMouse) return;
        setIsStartMouse(false);
        x1 = xValue;
        end()
    }

    const end = () => {

        if (!x1 || !x2) return;

        const xDiff = x2 - x1;
        if (xDiff > 0) selectAnswer("left")
        else selectAnswer("right")
    }



    return (
        <div className={style.wrapper}>
            <div className={style.task__wrapper}
                onMouseDown={mouseStart}
                onMouseMove={mouseMove}
                onMouseUp={mouseEnd}
                onTouchStart={startTouch}
                onTouchMove={moveTouch}
                onTouchEnd={endTouch}>
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