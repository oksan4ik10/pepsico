import Persona from "../../components/Persona/Persona";

import style from "./Screen2.module.css"

import { useAppDispatch } from "../../store/store";
import { setSex } from "../../store/reducer/sexReducer";

interface IProps {
    changeScreen: () => void
}

function Screen2(props: IProps) {
    const { changeScreen } = props;

    const dispatch = useAppDispatch();

    const clickPerson = (sex: "men" | "woman") => {
        dispatch(setSex(sex))
        changeScreen()
    }
    return (
        <div className={style.wrapper}>
            <Persona sex="men" clickPerson={clickPerson}></Persona>
            <p className={style.text}>Выбери персонажа</p>
            <Persona sex="woman" clickPerson={clickPerson}></Persona>

        </div>

    );
}

export default Screen2;