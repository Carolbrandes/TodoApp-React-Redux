import { ITodo } from '@types/index'
import {ADD_TODO, EDIT_TODO, ADD_EDIT_TODO, GET_TODOS} from '../types'


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

export const addEditTodo = (todo: ITodo) => {
    return {
        type: ADD_EDIT_TODO,
        todo
    }
}

export const getAllTodos = (listLS: ITodo[]) => {
    return{
        type: GET_TODOS,
        listLS

    }
}