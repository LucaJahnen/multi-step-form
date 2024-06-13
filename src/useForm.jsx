import { useState } from "react"

const useForm = steps => {
    const [stepIndex, setStepIndex] = useState(0)

    const increment = () => {
        setStepIndex(index => {
            return index == steps.length - 1 ? index : index + 1
        })
    }
    
    const decrement = () => {
        setStepIndex(index => {
            return index == 0 ? index : index - 1
        })
    }

    const goToStep = index => {
        setStepIndex(index)
    }

    return {
        stepIndex,
        step: steps[stepIndex],
        steps,
        increment,
        decrement,
        goToStep
    }
}

export default useForm