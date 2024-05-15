import { useAppSelector } from "../../store/store";
import ym from 'react-yandex-metrika';

import style from "./ScreenLast.module.css"

import { getFinalScreenPhoto } from "../../data/finalScreenPhoto";
import data from "../../data/finalScreen.json"
function ScreenLast() {
    const successPoints = useAppSelector((store) => store.pointsReducer).successPoints;

    const winNum = successPoints === 20 ? 0 : successPoints > 9 ? 1 : 2; //ПОМЕНЯТЬ 

    const photos = winNum === 2 ? getFinalScreenPhoto(false) : getFinalScreenPhoto(true)

    const dataScreen = data[winNum];
    const clickLink = () => {
        ym('reachGoal', 'click')

    }

    return (
        <div className={style.wrapper + " " + style[dataScreen.classError]}>
            <div className={style.main}>
                <div className={style.main__heading}>
                    <div className={style.main__photo} dangerouslySetInnerHTML={{ __html: photos[0] }}>

                    </div>
                    <div className={style.main__points}>
                        <div className={style.main__check} dangerouslySetInnerHTML={{ __html: photos[1] }}>
                        </div>
                        <span>{successPoints}/20</span>
                    </div>

                </div>
                <div className={style.main__text} dangerouslySetInnerHTML={{ __html: dataScreen.text }}>

                </div>
                <a href="https://groundupcareer.ru/" target="_blank" className={style.main__link + " btn"} onClick={clickLink}>Откликнуться</a>
            </div>

        </div>
    );
}

export default ScreenLast;