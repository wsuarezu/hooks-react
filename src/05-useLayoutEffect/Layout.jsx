import { useCounter, useFetch } from "../hooks"
import { LoadingQuote } from "../03-examples/LoadingQuote"
import { Quote } from "../03-examples/Quote"



export const Layout = () => {
    
const{counter, increment, decrement, reset} = useCounter(1)

const {data, isLoading, hasHerror} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)


const {quote, author} = !!data && data[0] 

  return (
    <>
       <h1>BreakingBad Quotes: {counter}</h1> 
       <hr />
       {
        isLoading 
        ? <LoadingQuote/> 
        : <Quote quote={quote} author={author}/>

       }

       <button 
       onClick={() => decrement(1)}
       className="btn btn-primary mt-2">
         Previous quote
       </button>

       <button 
       onClick={() => reset()}
       className="btn btn-danger mt-2">
         Reiniciar
       </button>

       <button 
       disabled= {isLoading}
       onClick={() => increment(1)}
       className="btn btn-primary mt-2">
        Next quote
       </button>
    </>
  )
}
