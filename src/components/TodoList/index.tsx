import { ITodo } from '@types/index'
import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import moment from 'moment'


const mapStateToProps = (state: any) => {
    return {
        todos: state.todoList
    }
}

class TodoList extends React.Component {
    state = {
        status: '',
        order: ''
    }

    handleStatus = (event: any) => {
        this.setState({
            status: event.target.value
        })
    }

    handleOrder = (event: any) => {
        this.setState({
            order: event.target.value
        })
    }

    todosWithFilter = (todos: any) => {
        return todos.filter((todo: any) => todo.status == this.state.status)
    }

    todosWithOrder = (todos: any) => (
        todos.sort((t1: any, t2: any) => {
            const todo1 = moment(t1.date)
            console.log("🚀 ~ file: index.tsx:43 ~ TodoList ~ todos.sort ~ todo1:", todo1)
            const todo2 = moment(t2.date)
            console.log("🚀 ~ file: index.tsx:45 ~ TodoList ~ todos.sort ~ todo2:", todo2)

            if (this.state.order == 'firstnew') {
                if (todo2 < todo1) return -1
                if (todo1 > todo2) return 1
                return 0
            }

            if (todo1 < todo2) {
                return -1;
            }
            if (todo2 > todo1) {
                return 1;
            }

            return 0;

        })
    )

    mytodos = (todos: any) => {
        if (this.state.status) return this.todosWithFilter(todos)
        if (this.state.order) return this.todosWithOrder(todos)
        return todos
    }

    render() {
        const { todos } = this.props


        return (
            <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                        labelId="status"
                        id="status"
                        value={this.state.status}
                        onChange={this.handleStatus}
                        label="Status"
                    >
                        <MenuItem value="">
                            <em>Todos</em>
                        </MenuItem>
                        <MenuItem value="p">Pendentes</MenuItem>
                        <MenuItem value="c">Concluídos</MenuItem>

                    </Select>
                </FormControl>


                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="order">Ordernar</InputLabel>
                    <Select
                        labelId="order"
                        id="order"
                        value={this.state.order}
                        onChange={this.handleOrder}
                        label="Ordernar"
                    >
                       
                        <MenuItem value="firstnew">Mais recentes</MenuItem>
                        <MenuItem value="firtsold">Mais antigos</MenuItem>

                    </Select>
                </FormControl>


                {
                    todos?.length ? (
                        this.mytodos(todos).map((todo: any) => (
                            <Todo 
                                key={todo.id} 
                                todo={todo}
                                handleModal={this.props.handleModal} 
                            />
                        ))
                    ) : (<p>Nenhuma tarefa cadastrada</p>)
                }

            </div>

        )
    }
}

export default connect(mapStateToProps)(TodoList)
