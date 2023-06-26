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

        default:
            return state
    }

}

export default todoList