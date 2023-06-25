import { ITodo } from '@types/index'
import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const mapStateToProps = (state: any) => {
    return {
        todos: state.todoList
    }
}

class TodoList extends React.Component {

   
    render() {
        const { todos } = this.props
        return (
            <div>

                {
                    todos?.length ? (
                        todos.map(({ id, name, description, isConcluded }: ITodo) => <Todo key={id} id={id} name={name} description={description} isConcluded={isConcluded} />)
                    ) : (<p>Nenhuma tarefa cadastrada</p>)
                }

            </div>

        )
    }
}

export default connect(mapStateToProps)(TodoList)
