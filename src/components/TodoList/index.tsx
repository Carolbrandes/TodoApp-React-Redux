import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Grid from '@mui/material/Unstable_Grid2'
import moment from 'moment'
import * as S from './styles'
import { IState, ITodo, IpropsTodoList } from '@types/index'


const mapStateToProps = (state: IState) => {
    return {
        todos: state.todoList,
    }
}

class TodoList extends React.Component<IpropsTodoList> {
    state = {
        status: 'all',
        order: 'firstnew'
    }

    handleStatus = (event: ChangeEvent<any>) => {
        this.setState({
            status: event.target.value
        })
    }

    handleOrder = (event: ChangeEvent<any>) => {
        this.setState({
            order: event.target.value
        })
    }

    todosWithFilter = (todos: ITodo[]) => {
        return todos.filter((todo: ITodo) => todo.status == this.state.status)
    }

    todosWithOrder = (todos: ITodo[]) => (
        todos.sort((t1: ITodo, t2: ITodo) => {
            const todo1 = moment(t1.date)
           
            const todo2 = moment(t2.date)
            

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

    todosTratement = (todos: ITodo[]) => {
        if (this.state.status && this.state.status != 'all') return this.todosWithFilter(todos)
        if (this.state.order) return this.todosWithOrder(todos)
        return todos
    }

    render() {
        const todos = localStorage.getItem('todos')
    
        const myTodos = todos && this.todosTratement(JSON.parse(todos)) || []
        console.log("🚀 ~ file: index.tsx:77 ~ TodoList ~ render ~ myTodos:", myTodos)
       

        return (
            <>
                <S.WrapperFilter>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="status">Status</InputLabel>
                        <Select
                            labelId="status"
                            id="status"
                            value={this.state.status}
                            onChange={this.handleStatus}
                            label="Status"
                        >
                            <MenuItem value="all">
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
                </S.WrapperFilter>



                {
                    myTodos?.length ?
                        <Grid container spacing={3}>
                            {
                                myTodos.map((todo: ITodo) =>
                                (
                                    <Todo
                                        contentEditable
                                        key={todo.id}
                                        todo={todo}
                                        handleModal={this?.props?.handleModal}
                                        todosLocalStorage={myTodos}
                                    />
                                )

                                )
                            }
                        </Grid>
                        :
                        (
                            <S.Text variant="subtitle1" gutterBottom>
                                Nenhuma tarefa cadastrada
                            </S.Text>
                        )
                }




            </>

        )
    }
}

export default connect(mapStateToProps)(TodoList)
