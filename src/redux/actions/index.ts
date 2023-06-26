import { ITodo } from '@types/index'
import {ADD_TODO, EDIT_TODO, ADD_EDIT_TODO} from '../types'


export const addTodo = (todoList: ITodo[]) => {
   
    return {
        type: ADD_TODO,
        todoList
    }
}

export const editTodo = (listEdit: ITodo[]) => {
    return {
        type: EDIT_TODO,
        listEdit
    }
}

export const addEditTodo = (todo: Itodo) => {
    return {
        type: ADD_EDIT_TODO,
        todo
    }
}