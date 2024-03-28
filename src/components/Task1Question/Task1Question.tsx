import { useState } from "react"

import { useAppDispatch, useAppSelector } from "../../store/store"
import { setPoints } from "../../store/reducer/pointsReducer"

import style from "./Task1Question.module.css"

import urlHR from "../../assets/hr-question.png"
import urlArrow from "../../assets/arrow.svg"


import { IDataTask1 } from "../../type"


interface IProps {
    taskInfo: IDataTask1;
    changeSetIsSuccess: (n: boolean) => void

}

function Task1Question(props: IProps) {
    const { taskInfo, changeSetIsSuccess } = props;

    const successPoints = useAppSelector((store) => store.pointsReducer).successPoints;

    const [checkCard, setCheckCard] = useState("");

    const dispatch = useAppDispatch();

    const checkAnswer = (side: "left" | "right") => {
        if (side === "left") setCheckCard("left")
        else setCheckCard("right")
        const isSuccess = taskInfo.correct2 === side;
        dispatch(setPoints({
            task: "task1",
            success: isSuccess
        }))
        setTimeout(() => changeSetIsSuccess(isSuccess), 2000)

    }

    const clickArrow = (_: React.MouseEvent<HTMLImageElement>, side: "left" | "right") => {
        if (checkCard) return
        checkAnswer(side)
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

    const mouseStart = (e: React.MouseEvent<HTMLDivElement>) => {
        x1 = e.pageX;
    }
    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        x2 = e.pageX;
    }
    const mouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e);

    }
    const mouseEnd = () => {
        end()
    }

    const end = () => {
        if (!x1 || !x2) return;

        const xDiff = x2 - x1;
        if (xDiff > 0) checkAnswer("left")
        else checkAnswer("right")
    }



    return (
        <div className={style.wrapper}>
            <div className={style.points}>{successPoints}/9</div>
            <div className={style.task}>
                <div className={style.character}><img src={urlHR} alt="HR" /></div>
                <div className={style.question}><p className={style.text} dangerouslySetInnerHTML={{ __html: taskInfo.question }}></p></div>
                <div className={style.answers} onMouseDown={mouseStart}
                    onMouseMove={mouseMove}
                    onMouseOut={mouseOut}
                    onMouseUp={mouseEnd} onTouchStart={startTouch} onTouchMove={moveTouch} onTouchEnd={endTouch}>
                    <div className={style.answer + " " + style.answer__left + " " + (checkCard === "left" ? style.check : checkCard === "right" ? style.noCheck : "")}><p className={style.answer__text} dangerouslySetInnerHTML={{ __html: taskInfo.answer1 }}></p></div>
                    <div className={style.answer + " " + style.answer__right + " " + (checkCard === "right" ? style.check : checkCard === "left" ? style.noCheck : "")}><p className={style.answer__text} dangerouslySetInnerHTML={{ __html: taskInfo.answer2 }}></p></div>
                </div>
                <div className={style.arrows + " " + (checkCard ? style.none : "")} >
                    < img className={style.arrow + " " + style.arrow__left} onClick={(e) => clickArrow(e, "left")} src={urlArrow} alt="arrowLeft" />
                    <img className={style.arrow + " " + style.arrow__right} onClick={(e) => clickArrow(e, "right")} src={urlArrow} alt="arrowRight" />


                </div>
            </div>





        </div>
    );
}

export default Task1Question;