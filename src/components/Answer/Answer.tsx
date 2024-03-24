import style from "./Answer.module.css"

import urlIcon from "../../assets/icon-answer.svg"
import urlPhoto from "../../assets/hr-photo.png"
import urlSuccessAnswer from "../../assets/success-answer.png"


function Answer() {
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
                <div className={style.text}>Слушая каждого, ты можешь<br />найти золотую середину, которая<br />сделает решение еще лучше.<br /> Постарайся в следующий раз быть<br />как детектив, который собирает<br />все улики, чтобы воссоздать<br />полную картину!</div>
            </div>

            <button className={style.btn}>Дальше</button>

        </div>
    );
}

export default Answer;