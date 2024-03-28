import { useAppSelector } from '../../store/store';
import Persona from '../Persona/Persona';
import urlArrow from "../../assets/arrow2.svg"

import style from "./Task2Question.module.css"

const Task2Question = () => {
    const sex = useAppSelector((store) => store.sexReducer).sex;
    return (
        <div className={style.wrapper}>
            <div className={style.task__wrapper}>
                <Persona sex={sex}></Persona>
                <div className={style.question}>
                    <p className={style.text}>Почему предлагаемая зарплата такая?</p>
                </div>
            </div>
            <div className={style.arrows}>
                <div className={style.arrow + " " + style.arrow__left}>
                    <img src={urlArrow} alt="arrow__left" />
                    <span>Не спрашиваю</span>

                </div>
                <div className={style.arrow + " " + style.arrow__right}>
                    <span>Спрашиваю</span>
                    <img src={urlArrow} alt="arrow__right" />
                </div>
            </div>
        </div>
    );
};

export default Task2Question;