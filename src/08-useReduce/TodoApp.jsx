
import { useTodo } from "../hooks/useTodo"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"


export const TodoApp = () => {

   
    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewtodo} = useTodo();

  return (
    <>
        <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">

                {/* TodoList */}
                <TodoList 
                todos={todos} 
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
                />
                {/* Fin TodoList */}
            </div>
            <div className="col-5">
                <h4>Agregar todo</h4>
                <hr />
                {/* TodoAdd onNewTodo(todo) */}
                {/* {id: newDate()..., description: '', done:false} */}
                <TodoAdd onNewTodo={ (todo) => handleNewtodo(todo)}/>
                {/* Fin TodoAdd */}
            </div>
        </div>
    </>
  )
}
