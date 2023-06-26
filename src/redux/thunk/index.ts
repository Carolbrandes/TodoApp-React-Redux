import {addTodo, addEditTodo, editTodo} from '@redux/actions'
import {ITodo} from '../../types'

export const addNewTodo = (payload) => (dispatch: any) => {
        console.log("🚀 ~ file: index.ts:5 ~ addNewTodo ~ payload:", payload)
        const {data, todos} = payload
        const newList = [...todos, data]
        localStorage.setItem('todos', JSON.stringify(newList))
        dispatch(addTodo(newList))
}

export const addnewEditTodo = (todo: ITodo) => (dispatch: any) => {
        dispatch(addEditTodo(todo))
}

export const updateTodo = (payload) => (dispatch: any) => {
        console.log("🚀 ~ file: thunk ~ updateTodo ~ payload:", payload)
        const {data, todos} = payload
        const removeTodo = todos.filter((todo: ITodo) => todo.id != data.id)
        const listEdit = [...removeTodo, data]
        localStorage.setItem('todos', JSON.stringify(listEdit))
       
        dispatch(editTodo(listEdit))
}