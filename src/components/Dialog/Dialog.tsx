import { useAppSelector } from "../../store/store";
import HRDialogPhoto from "../../data/HRDialogPhoto";
import data from "../../data/hrDialogText.json"

import style from "./Dialog.module.css"

interface IProps {
    dialogNum: number;
    changeScreen: () => void
}

const Dialog = (props: IProps) => {
    const { dialogNum, changeScreen } = props;
    const sex = useAppSelector((store) => store.sexReducer).sex;
    const infoDialog = sex === "woman" ? data[dialogNum] : dialogNum === 2 ? data[3] : data[dialogNum];

    return (
        <div className={style.wrapper + " " + style[infoDialog.classDialog]}>
            <div className={style.wrapper__container}>
                <div className={style.dialog}>
                    <p className={style.text} dangerouslySetInnerHTML={{ __html: infoDialog.text }}></p>
                    <button onClick={() => changeScreen()} className={style.dialog__btn + " btn"}>{infoDialog.textBtn}</button>
                </div>
                <div className={style.photo}>
                    <HRDialogPhoto screen={dialogNum} />
                    {dialogNum !== 2 && <div className={style.photo__name}><span>Аня HR-менеджер</span></div>}

                </div>
            </ div>


        </div>
    );
};

export default Dialog;