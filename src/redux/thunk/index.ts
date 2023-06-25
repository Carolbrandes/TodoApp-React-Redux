import {addTodo} from '@redux/actions'
import {ITodo} from '../../types'

export const addNewTodo = (todo: ITodo) => (dispatch: any) => {
        dispatch(addTodo(todo))
}