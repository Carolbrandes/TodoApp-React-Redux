import { ITodo } from '@types/index'
import {ADD_TODO, EDIT_TODO} from '../types'



export const addTodo = (newTodoList: ITodo[]) => {
    return {
        type: ADD_TODO,
        newTodoList
    }
}

export const editTodo = (todo: ITodo) => {
    return {
        type: EDIT_TODO,
        todo
    }
}