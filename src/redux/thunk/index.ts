import { addTodo, addEditTodo, editTodo, getAllTodos } from '@redux/actions'
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

export const getTodos = () =>  (dispatch: Dispatch<Action>) =>{
        const todosLs = localStorage.getItem('todos')

        const listLS = todosLs && JSON.parse(todosLs) || []
        
        if(todosLs?.length) dispatch(getAllTodos(listLS))
        
}