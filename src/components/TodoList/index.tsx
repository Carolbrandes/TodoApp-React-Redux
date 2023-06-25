import { ITodo } from '@types/index'
import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const mapStateToProps = (state: any) => {
    return {
        todos: state.todoList
    }
}

class TodoList extends React.Component {
    state = {
        status: ''
    }

    handleStatus = (event: any) => {
        this.setState({
            status: event.target.value
        })
    }

    todosWithFilter = (todos: any) => {
            return todos.filter((todo: any) => todo.status == this.state.status)
    }

    mytodos = (todos: any) => {
       if(this.state.status) return this.todosWithFilter(todos) 
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

                {
                    todos?.length ? (
                        this.mytodos(todos).map(({ id, name, description, status, date }: any) => (
                            <Todo key={id} id={id} name={name} description={description} status={status} date={date} />
                        ))
                    ) : (<p>Nenhuma tarefa cadastrada</p>)
                }

            </div>

        )
    }
}

export default connect(mapStateToProps)(TodoList)
