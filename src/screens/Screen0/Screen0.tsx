import style from "./Screen0.module.css"
interface IProps {
    changeScreen: () => void;
}
function Screen0(props: IProps) {
    const { changeScreen } = props;
    return <div className={style.wrapper}>
        <main className={style.main}>
            <div className={style.main__heading}>
                <svg width="260" height="38" viewBox="0 0 260 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8789 4.20312H42.1879V34.2455H33.5276V11.6243H22.5392V34.2455H13.8789V4.20312Z" fill="white" />
                    <path d="M57.646 4.20312H66.6788C71.9867 4.20312 73.9423 8.13724 71.428 14.7537V14.8431C68.7275 21.9961 63.5127 25.6619 58.2979 25.6619H55.4111L52.1518 34.2455H46.2852L57.646 4.20312ZM60.6259 19.1349C62.6746 19.1349 64.537 17.5255 65.4682 15.2008V15.1114C66.3994 12.5184 65.6545 11.1772 63.6058 11.1772H60.8121L57.8322 19.1349H60.6259Z" fill="white" />
                    <path d="M97.1307 34.2455V17.1678L83.8143 34.2455H76.2715V4.20312H84.9318V20.6549L97.7826 4.20312H105.791V34.2455H97.1307Z" fill="white" />
                    <path d="M111.006 4.20312H138.104C144.716 4.20312 149.372 5.18665 152.538 6.88548C154.68 8.13724 155.891 9.74665 155.891 11.8031V11.8925C155.891 15.3796 152.445 17.4361 147.789 18.5984C154.214 19.7608 158.312 21.8172 158.312 25.9302V26.0196C158.312 31.2055 150.955 34.3349 138.291 34.3349H111.099V4.20312H111.006ZM141.55 13.5019C141.55 11.8031 139.222 10.909 134.938 10.909H125.347V16.1843H134.566C138.942 16.1843 141.55 15.3796 141.55 13.5019ZM136.428 22.0855H125.253V27.629H136.614C141.177 27.629 143.598 26.6455 143.598 24.8572V24.7678C143.598 23.1584 141.364 22.0855 136.428 22.0855Z" fill="white" />
                    <path d="M161.85 4.20312H181.685V11.2667H168.647V15.8267H180.474V22.3537H168.647V27.0925H181.871V34.1561H161.85V4.20312Z" fill="white" />
                    <path d="M198.633 11.5349H184.199L186.993 4.20312H229.363L226.57 11.5349H212.043L203.382 34.2455H189.973L198.633 11.5349Z" fill="white" />
                    <path d="M232.25 7.86901V4.20312H241.935V7.86901L239.327 24.4996H234.857L232.25 7.86901ZM232.716 27.0031H241.562V34.3349H232.716V27.0031Z" fill="white" />
                </svg>
            </div>
            <p className={style.main__text}>
                Собеседование — это всегда<br />волнительно. Но что, если у тебя<br />есть возможность заранее узнать<br />вопросы и подготовиться?<br />Эта игра — тренажер собеседования<br />в крупную FMCG компанию!<br />Постарайся подобрать подходящие<br />ответы и замэтчиться<br />с HR!
            </p>
            <button className={style.main__btn + " btn"} onClick={() => changeScreen()}>Играть</button>


        </main>
    </div>
}

export default Screen0;