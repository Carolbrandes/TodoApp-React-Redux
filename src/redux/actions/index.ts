import { ITodo } from '@types/index'
import {ADD_TODO, EDIT_TODO, ADD_EDIT_TODO} from '../types'


export const addTodo = (todo: ITodo) => {
    return {
        type: ADD_TODO,
        todo
    }
}

export const editTodo = (todo: ITodo) => {
    return {
        type: EDIT_TODO,
        todo
    }
}

export const addEditTodo = (todo: Itodo) => {
    return {
        type: ADD_EDIT_TODO,
        todo
    }
}