import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReduce/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
 }

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewtodo = (todo) => {
        const action = {
            type: '[TODO] add Todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        
        dispatch({
            type: '[TODO] remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle Todo',
            payload: id
        })
    }


  return {
    todos, 
    handleDeleteTodo, 
    handleToggleTodo, 
    handleNewtodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done).length
  }
}
