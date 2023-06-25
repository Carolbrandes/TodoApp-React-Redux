import {ADD_TODO} from '@redux/types'
import { ITodo } from '@types/index'

interface Iaction {
    type: string
    todoList: ITodo[]
}


const initialState = {
    todoList: []
}

const todoList = (state = initialState, action: Iaction ) => {
 console.log('reducer state =>', state)

 switch (action.type) {
    case ADD_TODO:
        const newList = [...state.todoList, action.newTodoList]
        console.log('reducer newList =>', newList)
        return {
            ...state,
            todoList: newList
        }
        
 
    default:
        return state
 }

}

export default todoList