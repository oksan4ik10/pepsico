import { getPerson } from "../../data/personSvg";

import style from "./Persona.module.css"

interface IProps {
    clickPerson?: (s: "woman" | "men") => void;
    classStyle?: string;
    sex: "woman" | "men"
}

function Persona(props: IProps) {
    const { clickPerson, sex, classStyle } = props;
    const click = () => {
        if (clickPerson) clickPerson(sex)
    }
    return (
        <div className={style.person__wrapper + " " + classStyle} onClick={click}>
            <span></span>
            <div className={style.person} dangerouslySetInnerHTML={{ __html: getPerson(sex) }}></div>
        </div>
    );
}

export default Persona;