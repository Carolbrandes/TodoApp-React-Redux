import { ADD_TODO, EDIT_TODO } from '@redux/types'
import { ITodo } from '@types/index'

interface Iaction {
    type: string
    todoList?: ITodo[]
    todo?: ITodo
}


const initialState = {
    todoList: []
}

const todoList = (state = initialState, action: Iaction) => {
    console.log('reducer state =>', state)

    switch (action.type) {
        case ADD_TODO:
        
            return {
                ...state,
                todoList: [...state.todoList, action.newTodoList]
            }

        case EDIT_TODO:
            const removeTodo = state.todoList.filter((todo: ITodo) => todo.id != action.todo.id)
            const listEdit = [...removeTodo, action.todo]
        
            return {
                ...state,
                todoList: listEdit
            }

        default:
            return state
    }

}

export default todoList