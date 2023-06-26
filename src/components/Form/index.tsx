import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { addNewTodo } from '@redux/thunk'
import InputsForm from '@components/InputsForm'
import Box from '@mui/material/Box'


const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (payload: any) => dispatch(addNewTodo(payload))
})


class Form extends React.Component {
    state = {
        data: {
            name: '',
            description: '',
            status: 'p'
        }
    }

    setStateData = (field, newValue) => {
        this.setState({
            data: {
                ...this.state.data,
                [field]: newValue
            }
        })
    }

    handleClick = () => {
        this.props.addTodo({ ...this.state.data, id: nanoid(), date: `${new Date}` })
        this.setState({
            data: {
                name: '',
                description: '',
                status: 'p'
            }
        })

    }

    render() {

        return (
            <Box component="form">
                <InputsForm
                    labelButton="Adicionar"
                    data={this.state.data}
                    setStateData={this.setStateData}
                    handleClick={this.handleClick}
                />
            </Box>
        )
    }
}



export default connect(null, mapDispatchToProps)(Form)

