import style from "./Task1Question.module.css"

import urlHR from "../../assets/hr-question.png"
import urlArrow from "../../assets/arrow.svg"

function Task1Question() {
    return (
        <div className={style.wrapper}>
            <div className={style.points}>0/9</div>
            <div className={style.task}>
                <div className={style.character}><img src={urlHR} alt="HR" /></div>
                <div className={style.question}><p className={style.text}>Как бы ты разрешил(а)<br />конфликт в команде,<br />где ты лидер?</p></div>
                <div className={style.answers}>
                    <div className={style.answer + " " + style.answer__left}><p className={style.answer__text}>Пошел туда же,<br /> куда и друзья.</p></div>
                    <div className={style.answer + " " + style.answer__right}><p className={style.answer__text}>Делали проект по учебе и не уложились в сроки из-за ошибок в планировании</p></div>
                </div>
                <div className={style.arrows}>
                    < img className={style.arrow + " " + style.arrow__left} src={urlArrow} alt="arrowLeft" />
                    <img className={style.arrow + " " + style.arrow__right} src={urlArrow} alt="arrowRight" />


                </div>
            </div>





        </div>
    );
}

export default Task1Question;