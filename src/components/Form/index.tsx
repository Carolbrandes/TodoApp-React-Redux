import React, { ChangeEvent  } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { addNewTodo } from '@redux/thunk'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (payload: any) => dispatch(addNewTodo(payload))
})



class Form extends React.Component {
    state = {
        name: '',
        description: '',
        isConcluded: false
    }


    handleChange = (event: ChangeEvent<HTMLInputElement>, input: string) => {
        input == 'name' ?
            this.setState({
                name: event.target.value
            }) :  input == 'description' ?this.setState({
                description: event.target.value
            }): false
    }

    handleClick = () => {
        this.props.addTodo({...this.state, id: nanoid()})
    }

    render() {
        const name = this.state.name

        return (
            <Box component="form">
                <div>
                    <TextField
                        required
                        id="todo-name"
                        label="Tarefa"
                        variant="standard"
                        value={name}
                        onChange={(event) => this.handleChange(event, 'name')}
                    />
                </div>

                <div>
                    <TextField
                        required
                        id="description"
                        label="Descrição"
                        multiline
                        rows={4}
                        defaultValue=""
                        value={this.state.description}
                        onChange={(event) => this.handleChange(event, 'description')}
                    />
                </div>


                <Button variant="contained" onClick={this.handleClick}>Adicionar</Button>
            </Box>
        )
    }
}



export default connect(null, mapDispatchToProps)(Form)

