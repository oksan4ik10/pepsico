import { useAppSelector } from "../../store/store"

import { IDataTask1 } from "../../type"

import { dataHRTask } from "../../data/hrAnswerTask1";

import style from "./Answer.module.css"

interface IProps {
    changeTaskNum: () => void;
    isSuccess: boolean;
    closeAnswer: () => void;
    taskInfo: IDataTask1;
    task: "task1" | "task2"
}


function Answer(props: IProps) {
    const { closeAnswer, taskInfo, isSuccess, task } = props;

    const numAnswer = useAppSelector((store) => store.pointsReducer).points[task];
    const dataNumHr = isSuccess ? numAnswer.success : numAnswer.error
    const dataHR = dataHRTask(isSuccess, dataNumHr - 1, task)



    const clickNext = () => {
        closeAnswer();
    }


    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <div className={style.photo + " " + (isSuccess ? "" : style.error)}>
                    <div dangerouslySetInnerHTML={{ __html: dataHR[0] }}></div>
                    <div className={style.photo__circle} dangerouslySetInnerHTML={{ __html: dataHR[1] }}></div>
                    <div className={style.photo__circle} dangerouslySetInnerHTML={{ __html: dataHR[1] }}></div>
                    <div className={style.photo__circle} dangerouslySetInnerHTML={{ __html: dataHR[1] }}></div>
                    <div className={style.photo__circle} dangerouslySetInnerHTML={{ __html: dataHR[1] }}></div>
                </div>
                <div className={style.answer}>
                    {isSuccess && <svg width="226.000000" height="72.000000" viewBox="0 0 226 72" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <defs />
                        <path id="Vector" d="M26.6 8L17.89 21.17L27 35L18.52 35L13.46 26.8L8.31 35L0 35L9.1 21.25L0.39 8L8.86 8L13.53 15.63L18.29 8L26.6 8Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M27 21.07C27 13.32 33.26 7 41.54 7C49.81 7 56 13.16 56 20.92L56 21C56 28.67 49.73 35 41.45 35C33.18 35 27 28.83 27 21.07ZM48.36 21.07C48.36 17.07 45.55 13.71 41.45 13.71C37.36 13.71 34.63 17 34.63 20.92L34.63 21C34.63 24.83 37.44 28.28 41.54 28.28C45.63 28.28 48.36 25 48.36 21.07Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M60.08 8L71.74 8C78.54 8 83 11.53 83 17.48L83 17.56C83 23.99 78.06 27.28 71.33 27.28L67.53 27.28L67.53 35L60 35L60 8L60.08 8ZM71.25 21.41C73.92 21.41 75.54 19.97 75.54 17.88L75.54 17.8C75.54 15.47 73.84 14.26 71.17 14.26L67.61 14.26L67.61 21.41L71.25 21.41Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M132 8L139.54 8L139.54 28.33L147.73 28.33L147.73 8L155.27 8L155.27 28.33L163.45 28.33L163.45 8L171 8L171 35L132 35L132 8Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M183.43 35L188.99 19.57L177.41 35L174 35L183.67 8L187.56 8L182.24 22.78L193.35 8L197 8L187.32 35L183.43 35Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M218.66 34.91L218.66 19.41L207.38 35L201 35L201 7.63L208.33 7.63L208.33 22.57L219.21 7.63L226 7.63L226 34.91L218.66 34.91ZM206.04 0L210.38 0C210.85 1.13 211.72 1.78 213.46 1.78C215.27 1.78 216.14 1.13 216.61 0L220.95 0C220.48 3.89 217.71 5.84 213.46 5.84C209.35 5.84 206.52 3.89 206.04 0Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M86 20.07C86 12.32 95.25 6 107.54 6C119.82 6 129 12.16 129 19.92L129 20C129 27.67 119.74 34 107.45 34C95.09 33.92 86 27.76 86 20.07ZM117.61 20.07C117.61 16.07 113.52 12.71 107.37 12.71C101.31 12.71 97.22 16 97.22 19.92L97.22 20C97.22 23.83 101.39 27.28 107.45 27.28C113.6 27.19 117.61 23.92 117.61 20.07Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M26 58.07C26 50.32 35.27 44 47.58 44C59.89 44 69 50.23 69 57.92L69 58C69 65.67 59.72 72 47.41 72C35.1 72 26 65.83 26 58.07ZM57.67 58.07C57.67 54.07 53.57 50.71 47.41 50.71C41.26 50.71 37.24 54 37.24 57.92L37.24 58C37.24 61.83 41.42 65.28 47.5 65.28C53.57 65.28 57.67 62 57.67 58.07Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M77.49 51.58L71.28 51.58L73.7 45L92 45L89.58 51.58L83.29 51.58L75.8 72L70 72L77.49 51.58Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M94 45L107.71 45C111.06 45 113.45 45.88 115.05 47.4C116.08 48.52 116.8 49.96 116.8 51.8L116.8 51.89C116.8 55.01 115.05 56.85 112.65 57.89C115.92 58.94 118 60.78 118 64.46L118 64.55C118 69.19 114.25 72 107.87 72L94.08 72L94.08 45L94 45ZM109.46 53.33C109.46 51.8 108.27 51 106.11 51L101.25 51L101.25 55.73L105.96 55.73C108.19 55.73 109.46 55.01 109.46 53.33ZM106.91 60.94L101.25 60.94L101.25 65.91L106.99 65.91C109.3 65.91 110.58 65.03 110.58 63.42L110.58 63.34C110.58 61.98 109.38 60.94 106.91 60.94Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M122 45L156.68 45L156.68 51.36L133.87 51.36L133.87 55.47L154.56 55.47L154.56 61.35L133.87 61.35L133.87 65.63L157 65.63L157 72L122 72L122 45Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M168.82 51.58L161 51.58L161 45L184 45L184 51.58L176.09 51.58L176.09 72L168.82 72L168.82 51.58Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M187 48.28L187 45L195 45L195 48.28L192.84 63.18L189.15 63.18L187 48.28ZM187.38 65.42L194.69 65.42L194.69 72L187.38 72L187.38 65.42Z" fill="#6ECD6E" fill-opacity="1.000000" fill-rule="nonzero" />
                    </svg>
                    }
                    {!isSuccess && <svg width="293.000000" height="66.000000" viewBox="0 0 293 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs />
                        <path id="Vector" d="M22.16 6.86L14.06 6.86L14.06 0L37.86 0L37.86 6.86L29.69 6.86L29.69 28.13L22.16 28.13L22.16 6.86Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M51.15 0L55.17 0L51.48 28.13L46.95 28.13L47.69 23.13L41.85 23.13L38.98 28.13L34.62 28.13L51.15 0ZM48.6 17.06L49.75 9.15L45.23 17.06L48.6 17.06Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M59.5 0L67.15 0L67.15 10.63L68.55 10.63L76.93 0L86.06 0L74.55 13.64L86.55 28.13L77.1 28.13L68.55 17.33L67.15 17.33L67.15 28.13L59.5 28.13L59.5 0Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M129.83 28.13L121.31 28.13L114.6 10.65L107.9 28.13L99.54 28.13L111.12 0L118.16 0L129.83 28.13Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M134.18 28.13L139.45 18.67L128.75 0L137.47 0L143.64 11.3L149.4 0L157.96 0L142.66 28.13L134.18 28.13Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M185.65 19.67C182.32 20.01 178.98 20.26 176.06 20.26C163.47 20.26 156.88 16.49 156.88 9.87L156.88 0L170.22 0L170.22 8.78C170.22 11.89 172.72 13.14 178.06 13.14C180.73 13.14 183.32 12.97 185.73 12.64L185.73 0L199.08 0L199.08 28.13L185.73 28.13L185.73 19.67L185.65 19.67Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M204.49 0L209.08 0L209.08 21.18L214.09 21.18L214.09 0L218.69 0L218.69 21.18L223.69 21.18L223.69 0L228.29 0L228.29 28.13L204.57 28.13L204.57 0L204.49 0Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M232.62 0L270.16 0L270.16 6.63L245.46 6.63L245.46 10.91L267.84 10.91L267.84 17.04L245.46 17.04L245.46 21.49L270.49 21.49L270.49 28.13L232.62 28.13L232.62 0Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M0 37.86L7.56 37.86L7.56 48.41L17.32 48.41L17.32 37.86L24.88 37.86L24.88 66L17.32 66L17.32 55.28L7.56 55.28L7.56 66L0 66L0 37.86Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M30.29 37.86L67.83 37.86L67.83 44.5L43.08 44.5L43.08 48.78L65.5 48.78L65.5 54.91L43.08 54.91L43.08 59.36L68.16 59.36L68.16 66L30.29 66L30.29 37.86Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M87.63 51.47C87.63 43.37 94.18 36.78 102.82 36.78C111.47 36.78 117.93 43.21 117.93 51.3L117.93 51.39C117.93 59.4 111.38 66 102.74 66C94.09 66 87.63 59.48 87.63 51.47ZM109.96 51.47C109.96 47.3 107.02 43.79 102.74 43.79C98.46 43.79 95.61 47.21 95.61 51.3L95.61 51.39C95.61 55.39 98.54 58.98 102.82 58.98C107.1 58.98 109.96 55.48 109.96 51.47Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M127.11 44.73L119.01 44.73L119.01 37.86L142.81 37.86L142.81 44.73L134.64 44.73L134.64 66L127.11 66L127.11 44.73Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M150.91 37.86L158.19 37.86C159.97 37.86 160.9 38.78 161.16 40.37C161.33 41.53 161.07 43.04 160.39 44.96L160.39 45.04C159.21 48.3 157.52 50.22 155.9 51.3C157.17 52.39 157.6 54.31 156.16 58.15L156.16 58.23C154.38 63.07 151.33 66 147.94 66L140.65 66L150.91 37.86ZM155.82 46.54C156.41 44.96 156.07 44.12 154.89 44.12L152.35 44.12L150.57 49.05L153.02 49.05C154.21 49.05 155.23 48.21 155.82 46.54ZM151.58 54.48L148.62 54.48L146.67 59.65L149.72 59.65C150.91 59.65 151.92 58.73 152.52 57.06L152.52 56.98C153.11 55.48 152.85 54.48 151.58 54.48Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M163.46 37.86L185.93 37.86L185.93 44.5L171.11 44.5L171.11 48.78L184.51 48.78L184.51 54.91L171.11 54.91L171.11 59.36L186.09 59.36L186.09 66L163.37 66L163.37 37.86L163.46 37.86Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M205.61 57.54C203.75 57.87 201.81 58.12 200.19 58.12C193.06 58.12 189.34 54.35 189.34 47.74L189.34 37.86L196.87 37.86L196.87 46.65C196.87 49.75 198.25 51.01 201.32 51.01C202.86 51.01 204.24 50.84 205.61 50.5L205.61 37.86L213.14 37.86L213.14 66L205.61 66L205.61 57.54Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M232.87 36.78L236.94 36.78L233.44 64.91L228.87 64.91L229.6 59.92L223.65 59.92L220.79 64.91L216.39 64.91L232.87 36.78ZM230.5 53.84L231.64 45.94L227.08 53.84L230.5 53.84Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M249.37 44.73L241.27 44.73L241.27 37.86L265.08 37.86L265.08 44.73L256.9 44.73L256.9 66L249.37 66L249.37 44.73Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                        <path id="Vector" d="M268.41 37.86L276.2 37.86L276.2 46.23L280.31 46.23C287.43 46.23 292.13 49.5 292.13 55.86L292.13 55.95C292.13 62.23 287.52 66 280.06 66L268.32 66L268.32 37.86L268.41 37.86ZM279.97 59.55C282.74 59.55 284.5 58.29 284.5 56.03L284.5 55.95C284.5 53.69 282.91 52.51 280.06 52.51L276.29 52.51L276.29 59.55L279.97 59.55Z" fill="#D52B2B" fill-opacity="1.000000" fill-rule="nonzero" />
                    </svg>
                    }

                </div>
                <div className={style.text} dangerouslySetInnerHTML={isSuccess ? { __html: taskInfo.success } : { __html: taskInfo.error }}></div>
            </div>

            <button className={style.btn + " " + "btn btn__btm"} onClick={clickNext}>Дальше</button>

        </div>
    );
}

export default Answer;