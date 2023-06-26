import { addTodo, addEditTodo, editTodo } from '@redux/actions'
import { IPayloadEdit, ITodo } from '../../types'
import { Action, Dispatch } from 'redux'

export const addNewTodo = (payload: IPayloadEdit) => (dispatch: Dispatch<Action>) => {

        const { data, todos } = payload
        const newList = [...todos, data]
        localStorage.setItem('todos', JSON.stringify(newList))
        dispatch(addTodo(newList))
}

export const addnewEditTodo = (todo: ITodo) => (dispatch: Dispatch<Action>) => {
        dispatch(addEditTodo(todo))
}

export const updateTodo = (payload: IPayloadEdit) => (dispatch: Dispatch<Action>) => {

        const { data, todos } = payload
        const removeTodo = todos.filter((todo: ITodo) => todo.id != data.id)
        const listEdit = [...removeTodo, data]
        localStorage.setItem('todos', JSON.stringify(listEdit))

        dispatch(editTodo(listEdit))
}