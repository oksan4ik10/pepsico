import { getPerson } from "../../data/personSvg";

import style from "./Screen2.module.css"

import { useAppDispatch } from "../../store/store";
import { setSex } from "../../store/reducer/sexReducer";

interface IProps {
    changeScreen: (n: number) => void
}

function Screen2(props: IProps) {
    const { changeScreen } = props;

    const dispatch = useAppDispatch();

    const clickPerson = (sex: "men" | "woman") => {
        dispatch(setSex(sex))
        changeScreen(2)
    }
    return (
        <div className={style.wrapper}>
            <div className={style.person__wrapper} onClick={() => clickPerson("men")}>
                <span></span>
                <div className={style.person} dangerouslySetInnerHTML={{ __html: getPerson("men") }}></div>
            </div>

            <p className={style.text}>Выбери персонажа</p>
            <div className={style.person__wrapper} onClick={() => clickPerson("woman")}>
                <span></span>
                <div className={style.person} dangerouslySetInnerHTML={{ __html: getPerson("woman") }}></div>
            </div>

        </div>

    );
}

export default Screen2;