import { useContext } from "react"
import { UserContext } from "./context/userContext"


export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext)

  return (
    <>
        <h1>LoginPage</h1>
        <hr />
        <pre>
            {JSON.stringify(user)}
        </pre>
        <button 
            onClick={() => setUser({id:123, name:'Walther', emai: 'walter@gmail.com'})}
            className="btn btn-primary">
            Establecer usuario
        </button>
    </>
  )
}
