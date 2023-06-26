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
        name: '',
        description: '',
        status: 'p'
    }


    handleChange = (event: ChangeEvent<HTMLInputElement>, input: string) => {
        input == 'name' ?
            this.setState({
                name: event.target.value
            }) : input == 'description' ? this.setState({
                description: event.target.value
            }) : false
    }

    handleClick = () => {
        this.props.addTodo({ ...this.state, id: nanoid(), date: `${new Date}` })
    }

    render() {
        const name = this.state.name

        return (
            <Box component="form">

                <S.InputWrapper
                    required
                    id="todo-name"
                    label="Tarefa"
                    value={name}
                    onChange={(event) => this.handleChange(event, 'name')}
                />


                <S.InputWrapper
                    required
                    id="description"
                    label="Descrição"
                    multiline
                    rows={4}
                    defaultValue=""
                    value={this.state.description}
                    onChange={(event) => this.handleChange(event, 'description')}
                />



                <div>
                    <Button variant="contained" onClick={this.handleClick}>Adicionar</Button>
                </div>
            </Box>
        )
    }
}



export default connect(null, mapDispatchToProps)(Form)

