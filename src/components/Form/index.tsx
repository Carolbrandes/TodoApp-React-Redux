import React, { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import {addTodo} from '@redux/actions'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (payload: any) => dispatch(addTodo(payload))
})

class Form extends React.Component {
    state = {
        name: '',
        description: ''
    }


    handleChange = (event: ChangeEvent<HTMLInputElement>, input: string) => {
        input == 'name' ?
            this.setState({
                name: event.target.value
            }) : this.setState({
                description: event.target.value
            })
    }

    handleClick = () => {
        console.log('handleclik')
        this.props.addTodo(this.state)
    }

    render() {
        console.log(this.props)
        const name = this.state.name

        return (
            <Box component="form">
                <TextField
                    id="todo-name"
                    label="Tarefa"
                    variant="standard"
                    value={name}
                    onChange={(event) => this.handleChange(event, 'name')}
                />

                <Button variant="contained" onClick={this.handleClick}>Adicionar</Button>
            </Box>
        )
    }
}



export default connect(null, mapDispatchToProps)(Form)

