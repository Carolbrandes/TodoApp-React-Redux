import { ITodo } from '@types/index'
import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Grid from '@mui/material/Unstable_Grid2';
import moment from 'moment'
import * as S from './styles'


const mapStateToProps = (state: any) => {
    return {
        todos: state.todoList,
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

    todosTratement = (todos: any) => {
        if (this.state.status) return this.todosWithFilter(todos)
        if (this.state.order) return this.todosWithOrder(todos)
        return todos
    }

    render() {
        const todos = localStorage.getItem('todos')
        console.log("🚀 ~ TodoList ~ render ~ todoslocalstorage:", todos)
       
        const myTodos = todos && this.todosTratement(JSON.parse(todos))
        // console.log("🚀 ~ file: index.tsx:80 ~ TodoList ~ render ~ myTodos:", myTodos)

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
                </S.WrapperFilter>



                {
                    myTodos?.length ?
                        <Grid container spacing={3}>
                            {
                                myTodos.map((todo: any, index: number) =>
                                (
                                    <Todo
                                        ref={todo.ref}
                                        contentEditable
                                        index={index}
                                        key={todo.id}
                                        todo={todo}
                                        handleModal={this.props.handleModal}
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
