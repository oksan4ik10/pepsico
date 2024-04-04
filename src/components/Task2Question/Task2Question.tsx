import { useState, useRef, useEffect, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/store';
import { setPoints } from '../../store/reducer/pointsReducer';

import Persona from '../Persona/Persona';
import urlArrow from "../../assets/arrow2.svg"

import style from "./Task2Question.module.css"
import { IDataTask2 } from '../../type';

interface IProps {
    infoTask: IDataTask2
    changeSetIsSuccess: (n: boolean) => void
}

const Task2Question = (props: IProps) => {
    const { changeSetIsSuccess, infoTask } = props;
    const sex = useAppSelector((store) => store.sexReducer).sex;

    const dispatch = useAppDispatch();

    const selectAnswer = (s: "left" | "right") => {
        if (!refSlide.current) return

        const target = refSlide.current;
        target.classList.add(style.check)

        if (!target) return
        if (s === "right") {
            target.style.left = "1000px";
            target.style.top = "-1000px";

        } else {
            target.style.left = "-1000px";
            target.style.top = "-1000px";
        }

        const isSuccess = infoTask.correct2 === s;
        dispatch(setPoints({
            task: "task2",
            success: isSuccess
        }))
        changeSetIsSuccess(isSuccess);
    }

    const refSlide = useRef<HTMLDivElement>(null);
    const [targetDrag, setTargetDrag] = useState<HTMLElement | null>(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const startTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];

        start(data.clientX, data.clientY, e.currentTarget)
    }
    const [isStartMouse, setIsStartMouse] = useState(false);
    const mouseStart = (e: React.MouseEvent<HTMLDivElement>) => {
        start(e.pageX, e.pageY, e.currentTarget);
        setIsStartMouse(true);
    }
    const [diffX, setDiffX] = useState(0);
    const moveTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];
        const clientY = data.clientY;
        const clientX = data.clientX;
        move(clientX, clientY)

    }
    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isStartMouse) return
        move(e.pageX, e.pageY);
    }

    const endTouch = () => {

        end()


    }
    const mouseEnd = () => {
        if (!isStartMouse) return;
        setIsStartMouse(false);
        end();
    }
    const mouseOut = () => {

        if (!isStartMouse) return;
        setIsStartMouse(false);
        end();
    }

    const start = (clientX: number, clientY: number, target: HTMLDivElement) => {
        clearTimeout(idAnimation1.current);
        clearTimeout(idAnimation2.current);
        refQuestion.current?.classList.remove(style.animation)
        setX(clientX);
        setY(clientY);
        target.style.position = "absolute";

        target.style.left = target.offsetLeft + "px";
        target.style.top = target.offsetTop + "px";
        setTargetDrag(target)
    }

    const move = (clientX: number, clientY: number) => {
        const diffXMove = clientX - x;
        const diffY = clientY - y;

        if (targetDrag) {
            const rotation = 40 * (targetDrag.offsetLeft / (targetDrag.offsetWidth / 3));
            const y = targetDrag.offsetTop + diffY;
            const x = targetDrag.offsetLeft + diffXMove;
            if ((y <= 0) && (y >= -20)) targetDrag.style.top = y + "px";
            if ((x < 15) && (x > -15)) targetDrag.style.left = x + "px";
            targetDrag.style.transform = `rotate(${rotation}deg)`;
            setX(clientX);
            setY(clientY);
            setDiffX(diffXMove)
        }


    }
    const end = () => {
        if (!targetDrag) return;
        if ((targetDrag.offsetLeft >= -5) && (targetDrag.offsetLeft <= 5)) {
            targetDrag.style.left = "0px";
            targetDrag.style.top = "0px";
            targetDrag.style.transform = `rotate(0deg)`;
            targetDrag.style.position = "relative";
            setX(0);
            setY(0);
            setDiffX(0);
            setTargetDrag(null);
            t = true;
            result();
            return
        }
        t = false;

        clearTimeout(idAnimation1.current);
        clearTimeout(idAnimation2.current);
        if (diffX > 0) {

            selectAnswer("right")
        } else {

            selectAnswer("left");
        }
    }

    const idAnimation1 = useRef(0);
    const idAnimation2 = useRef(0);
    let t = true;
    const result = useCallback(() => {

        if (t) {
            t = false;
            idAnimation1.current = setTimeout(function run() {
                refQuestion.current?.classList.toggle(style.animation)
                idAnimation2.current = setTimeout(run, 3000);
            }, 3000);
        }

    }, [idAnimation1.current]
    )

    const refQuestion = useRef<HTMLDivElement>(null);

    useEffect(() => {
        result()
    }, [])







    return (
        <div className={style.slide1} ref={refSlide}>
            <div className={style.wrapper}>
                <div className={style.task__wrapper}>
                    <Persona sex={sex}></Persona>
                    <div style={{ position: 'relative', height: "150px", marginTop: "30px" }}>
                        <div className={style.question} ref={refQuestion}
                            onTouchStart={startTouch}
                            onTouchMove={moveTouch}
                            onTouchEnd={endTouch}
                            onMouseDown={mouseStart}
                            onMouseMove={mouseMove}
                            onMouseUp={mouseEnd}
                            onMouseOut={mouseOut}
                        >
                            <p className={style.text} dangerouslySetInnerHTML={{ __html: infoTask.question }} />
                        </div>
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
        </div>
    );
};

export default Task2Question;