export interface ITodo {
    id?: string
    name?: string
    description?: string
    status?: string
    date?: string
}

export interface IState {
    todoList: ITodo[]
    todoForEdition: ITodo
}

export interface IPayloadEdit {
    todos: ITodo[]
    data: ITodo
}

export interface IpropsModalEdit {
    todoEdit: ITodo
    todos: ITodo[]
    updateTodo: Function
    handleCloseModal: () => void
    modal: boolean
    payload?: IPayloadEdit
}

export interface IpropsForm{
    addTodo: Function
    todos: ITodo[]
    payload?: IPayloadEdit
}

export interface Irror{
    type: string
    message: string
}

export interface IpropsInputForm {
    setStateData: Function
    data: ITodo
    handleClick: Function
    labelButton: string
    isEdit?: boolean
}

export interface IpropsTodo {
    status: string
    updateTodo: Function
    todos: ITodo[]
    addnewEditTodo: Function
    handleModal: Function
    todo: ITodo
    contentEditable: any
}

export interface IpropsTodoList {
    handleModal: Function
}

