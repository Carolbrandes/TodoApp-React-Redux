import React, { ChangeEvent } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { addNewTodo } from '@redux/thunk'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'


import * as S from '@styles/Global'


const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (payload: any) => dispatch(addNewTodo(payload))
})


class Form extends React.Component {
    state = {
        data: {
            name: '',
            description: '',
            status: 'p'
        },
        errors: []
    }

    handleOnBlur = (event: ChangeEvent<HTMLInputElement>, input: string) => {

        if (event.target.value.length == 0) {
            input == 'name' ?
                this.setState({
                    errors: [...this.state.errors.filter(err => err.type != 'all'), { message: 'Preencha o nome da atividade', type: 'name' }]
                }) : input == 'description' ? this.setState({
                    errors: [...this.state.errors.filter(err => err.type != 'all'), { message: 'Preencha a descrição', type: 'description' }]
                }) : false
        }
    }


    handleChange = (event: ChangeEvent<HTMLInputElement>, input: string) => {

        input == 'name' ?
            this.setState({
                data: {
                    name: event.target.value
                },
                errors: this.state.errors.filter((error: any) => error.type != 'name' && error.type != 'all')
            }) : input == 'description' ? this.setState({
                data: {
                    description: event.target.value
                },
                errors: this.state.errors.filter((error: any) => error.type != 'description')
            }) : false
    }

    handleClick = () => {
        if (!this.state.data.name && !this.state.data.description) {
            console.log('deu errado')
            this.setState({
                errors: [{ message: 'Preencha o nome da Atividade e a Descrição', type: 'all' }]
            })

            return
        }

        console.log('td certo!')
        this.props.addTodo({ ...this.state.data, id: nanoid(), date: `${new Date}` })
        this.setState({
            errors: [],
            data: {
                name: '',
                description: ''
            }
        })

    }

    render() {
        const { name, description } = this.state.data

        return (
            <Box component="form">

                <S.InputWrapper
                    required
                    id="todo-name"
                    placeholder="Tarefa"
                    value={name}
                    onBlur={(event) => this.handleOnBlur(event, 'name')}
                    onChange={(event) => this.handleChange(event, 'name')}
                />


                <S.InputWrapper
                    required
                    id="description"
                    placeholder="Descrição"
                    multiline
                    rows={4}
                    defaultValue=""
                    value={description}
                    onBlur={(event) => this.handleOnBlur(event, 'description')}
                    onChange={(event) => this.handleChange(event, 'description')}
                />


                {
                    this.state?.errors?.map((error) => <S.ErrorMessage severity="error">{error.message}</S.ErrorMessage>)
                }

                <div>
                    <Button variant="contained" onClick={this.handleClick}>Adicionar</Button>
                </div>
            </Box>
        )
    }
}



export default connect(null, mapDispatchToProps)(Form)

