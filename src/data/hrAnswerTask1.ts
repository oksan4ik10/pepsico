import urlHRS from "../assets/hr-photo.png"
import urlIconS from "../assets/icon-answer.svg"
import urlHRE from "../assets/hr-photoError.png"
import urlIconE from "../assets/icon-answerError.svg"



export const dataHRTask1 = (success: boolean, num: number) => {
    const data = {
        success: [[urlHRS, urlIconS], [urlHRE, urlIconE]],
        error: [[urlHRE, urlIconE], [urlHRS, urlIconS]],

    }

    return success ? data.success[num] : data.error[num]
} 