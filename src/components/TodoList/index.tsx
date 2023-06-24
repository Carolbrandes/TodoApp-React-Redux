import { ITodo } from '@types/index'
import React from 'react'
import { connect } from 'react-redux'


//state -> todo o conteudo da STORE
const mapStateToProps = (state: any) => {
    console.log('mapStateToProps state =>', state)
    return {
        todos: state.todoList
    }
}


class TodoList extends React.Component {
    
    render() {
        console.log('this.props =>', this.props)
        const {todos} = this.props
        console.log('todos =>', todos)
        return (
            <div>
                {
                    todos?.length ? (
                        todos.map((todo: ITodo) => (<p key={todo.name}>{todo.name}</p>))
                    ) : (<p>Nenhuma tarefa cadastrada</p>)
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(TodoList)
