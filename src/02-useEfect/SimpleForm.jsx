import { useEffect } from "react"
import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Will',
        email: 'william@gmail.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) =>{
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
      //console.log('use efec llamado')
    
    }, [])

    useEffect(() => {
        //console.log('use efec cambiado')
      
      }, [formState])

      useEffect(() => {
        //console.log('email cambio')
      
      }, [email])
    

  return (
    <>
        <h1>SimpleForm</h1>
        <hr />
        <input 
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            type="text" 
            onChange={onInputChange}
        />


        <input 
            className="form-control mt-2"
            placeholder="william@gmail.com"
            name="email"
            value={email}
            type="email" 
            onChange={onInputChange}
            />

        {
           ( username === 'Will2') &&  <Message/>
        }
    </>
  )
}
