import {ADD_TODO} from '../types'

interface ITodo{
    name: string
    description: string
}

export const addTodo = (newTodoList: ITodo) => {
    console.log('action newTodoList =>', newTodoList)
    return {
        type: ADD_TODO,
        newTodoList
    }
}