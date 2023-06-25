import {addTodo, addEditTodo} from '@redux/actions'
import {ITodo} from '../../types'

export const addNewTodo = (todo: ITodo) => (dispatch: any) => {
        dispatch(addTodo(todo))
}

export const addnewEditTodo = (todo: ITodo) => (dispatch: any) => {
        dispatch(addEditTodo(todo))
}