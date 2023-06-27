import { ADD_TODO, EDIT_TODO, ADD_EDIT_TODO, GET_TODOS } from '@redux/types'
import { ITodo } from '@types/index'

interface Iaction {
    type: string
    todoList?: ITodo[]
    todo?: ITodo
    listEdit?: ITodo[]
    listLS?: ITodo[]
}


const initialState = {
    todoList: [],
    todoForEdition: {}
}

const todoList = (state = initialState, action: Iaction) => {


    switch (action.type) {
        case ADD_TODO:

            return {
                ...state,
                todoList: action.todoList
            }

        case EDIT_TODO:

            return {
                ...state,
                todoList: action.listEdit
            }


        case ADD_EDIT_TODO:

            return {
                ...state,
                todoForEdition: action.todo
            }

        case GET_TODOS:

            return {
                ...state,
                todoList: action.listLS
            }

        default:
            return state
    }

}

export default todoList