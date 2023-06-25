import {addTodo, addEditTodo, editTodo} from '@redux/actions'
import {ITodo} from '../../types'

export const addNewTodo = (todo: ITodo) => (dispatch: any) => {
        dispatch(addTodo(todo))
}

export const addnewEditTodo = (todo: ITodo) => (dispatch: any) => {
        dispatch(addEditTodo(todo))
}

export const updateTodo = (todo: ITodo) => (dispatch: any) => {
        console.log("🚀 ~ file: thunk ~ updateTodo ~ todo:", todo)
        dispatch(editTodo(todo))
}