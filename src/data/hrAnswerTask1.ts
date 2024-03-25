import urlHRS from "../assets/hr-question.png"
import urlIconS from "../assets/icon-answer.svg"
import urlHRE from "../assets/hr-photoError.png"
import urlIconE from "../assets/icon-answerError.svg"



export const dataHRTask1 = (success: boolean, num: number) => {
    const data = {
        success: [{ urlHRS, urlIconS }],
        error: [{ urlHRE, urlIconE }]
    }

    return success ? data.success[num] : data.error[num]
} 