import { ADD_TODO, EDIT_TODO, ADD_EDIT_TODO } from '@redux/types'
import { ITodo } from '@types/index'

interface Iaction {
    type: string
    todoList?: ITodo[]
    todo?: ITodo
}


const initialState = {
    todoList: [],
    todoForEdition: {}
}

const todoList = (state = initialState, action: Iaction) => {
    console.log('reducer state =>', state)

    switch (action.type) {
        case ADD_TODO:

            return {
                ...state,
                todoList: [...state.todoList, action.todo]
            }

        case EDIT_TODO:
            const removeTodo = state.todoList.filter((todo: ITodo) => todo.id != action.todo.id)
            const listEdit = [...removeTodo, action.todo]

            return {
                ...state,
                todoList: listEdit
            }


        case ADD_EDIT_TODO:
            console.log('add edit todo =>', action.todo)
            return {
                ...state,
                todoForEdition: action.todo
            }

        default:
            return state
    }

}

export default todoList