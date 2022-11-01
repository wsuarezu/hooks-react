import { useMemo } from "react"
import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

const heavyStuff = (iterationNumber = 100) => {
    for(let i=0; i < iterationNumber; i++){
        console.log('bucle repetitivo')
    }

    return `Se realizaron ${iterationNumber} iteraciones`
}



export const MemoHook = () => {

    const {counter, increment} = useCounter(4000)
    const [show, setShow] = useState(true)

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter memo hook: <small>{counter}</small></h1>
        <hr />
        <h4>{memorizeValue}</h4>
        <button 
            onClick={()=>increment()}
            className="btn btn-primary"
        >
            +1
        </button>

        <button
            onClick={() => setShow(!show)}
            className="btn btn-outline-primary"
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
