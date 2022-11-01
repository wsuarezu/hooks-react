import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(50)
    const value = 5
  return (
   <>
        <h1>Counter with custom hook: {counter}</h1>
        <hr />
        <button onClick={() => increment(value)} className="btn btn-success">+{value}</button>
        <button onClick={reset} className="btn btn-success">Reset</button>
        <button onClick={() => decrement(value)} className="btn btn-success">-{value}</button>
        
   </>
  )
}
