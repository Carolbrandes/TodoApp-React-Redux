import { ITodo } from '@types/index'
import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'


//state -> todo o conteudo da STORE
const mapStateToProps = (state: any) => {
    return {
        list: state.todoList
    }
}


class TodoList extends React.Component {


    render() {
        console.log('this props =>', this.props)
        const { list } = this.props

        return (
            <div>

                {
                    list?.length ? (
                        list.map(({name, description}: ITodo) => <Todo key={name} name={name} description={description} />)
                    ) : (<p>Nenhuma tarefa cadastrada</p>)
                }
                
            </div>

        )
    }
}

export default connect(mapStateToProps)(TodoList)
