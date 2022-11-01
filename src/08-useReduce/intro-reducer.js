const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}]

const todoReduce = (state = initialState, action = {}) => {

    if(action.type === '[todo] add todo'){
        return [...state, action.payload]
    }

    return state
}

let todos = todoReduce()

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: '[todo] add todo',
    payload: newTodo
}

todos = todoReduce(todos, addTodoAction)

console.log({state: todos})