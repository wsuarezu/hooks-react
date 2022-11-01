import { useEffect } from "react"
import { useState } from "react"
import { useForm } from "../hooks/useForm"
import { Message } from "./Message"

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
      username: '',
      email: '',
      password: ''
    })

    //const {username, email, password} = formState


  return (
    <>
        <h1>Formulario con custom hook</h1>
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

          <input 
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={password}
            type="password" 
            onChange={onInputChange}
          />

          <button onClick={onResetForm} className="bt btn-primary mt-2">Borrar</button>


        
    </>
  )
}
