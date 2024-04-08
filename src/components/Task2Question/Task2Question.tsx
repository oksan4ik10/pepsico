import { useState, useRef, useEffect, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/store';
import { setPointsTask2 } from '../../store/reducer/pointsReducer';

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
        dispatch(setPointsTask2({
            side: s,
            success: isSuccess
        }))
        changeSetIsSuccess(isSuccess);
    }

    const refSlide = useRef<HTMLDivElement>(null);
    const [targetDrag, setTargetDrag] = useState<HTMLElement | null>(null);

    const startTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];

        start(data.clientX, e.currentTarget)
    }
    const [isStartMouse, setIsStartMouse] = useState(false);
    const mouseStart = (e: React.MouseEvent<HTMLDivElement>) => {
        start(e.pageX, e.currentTarget);
        setIsStartMouse(true);
    }
    const moveTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        const data = e.changedTouches[0];
        const clientX = data.clientX;
        move(clientX)

    }
    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isStartMouse) return
        move(e.pageX);
    }

    const endTouch = () => {

        end()


    }
    const mouseEnd = () => {

        if (!isStartMouse) return;
        setIsStartMouse(false);
        end();
    }
    const mouseOut = (e: React.MouseEvent<HTMLDivElement>) => {

        if (!isStartMouse) return;

        if (e.target === refQuestion.current) {
            setIsStartMouse(false);
            endFalse()
        }
    }

    const [leftTarget, setLeftTarget] = useState(0);
    const start = (clientX: number, target: HTMLDivElement) => {
        clearTimeout(idAnimation1.current);
        clearTimeout(idAnimation2.current);
        refQuestion.current?.classList.remove(style.animation)
        t = false;

        const left = target.getBoundingClientRect().left;

        setLeftTarget(left);
        target.style.position = "absolute";

        let x = clientX - left - (target.offsetWidth / 2);
        if (x > 20) x = 20;
        else if (x < -20) x = -20;
        target.style.left = x + "px";
        const rotation = 40 * (target.offsetLeft / (target.offsetWidth / 3));
        target.style.transform = `rotate(${rotation}deg)`;
        setRotate(rotation)
        setTargetDrag(target)
    }

    const [rotate, setRotate] = useState(0);

    const move = (clientX: number) => {
        if (!targetDrag) return;
        refQuestion.current?.classList.remove(style.animation)

        let x = clientX - leftTarget - (targetDrag.offsetWidth / 2);

        if (x > 20) x = 20;
        else if (x < -20) x = -20;

        targetDrag.style.left = x + "px";

        const rotation = 40 * (targetDrag.offsetLeft / (targetDrag.offsetWidth / 3));
        targetDrag.style.transform = `rotate(${rotation}deg)`;
        setRotate(rotation)
    }

    const endFalse = () => {
        if (!targetDrag) return;
        targetDrag.style.left = "auto";
        targetDrag.style.transform = "rotate(0deg) translateX(0px)";
        targetDrag.style.position = "relative";
        setTargetDrag(null);
        t = true;
        result();
        setLeftTarget(0);
    }
    const end = () => {
        if (!targetDrag) return;
        if ((targetDrag.offsetLeft >= -5) && (targetDrag.offsetLeft <= 5)) {
            endFalse()
            return
        }

        t = false;

        clearTimeout(idAnimation1.current);
        clearTimeout(idAnimation2.current);

        if (rotate > 0) {

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


            idAnimation1.current = setTimeout(function run() {
                if (!t) return;
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
                            onMouseLeave={mouseOut}
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