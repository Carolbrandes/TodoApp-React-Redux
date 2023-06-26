import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { addNewTodo } from '@redux/thunk'
import InputsForm from '@components/InputsForm'
import Box from '@mui/material/Box'
import { IPayloadEdit,  IState,  IpropsForm } from '@types/index'
import {  Dispatch } from 'redux'


const mapStateToProps = (state: IState) => {
    return {
        todos: state.todoList,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    addTodo: (payload: IPayloadEdit) => {
        dispatch(addNewTodo(payload));
    }
});


class Form extends React.Component<IpropsForm> {
    state = {
        data: {
            name: '',
            description: '',
            status: 'p'
        }
    }

    setStateData = (field: string, newValue: string) => {
        this.setState({
            data: {
                ...this.state.data,
                [field]: newValue
            }
        })
    }

    handleClick = () => {
        const { addTodo }: IpropsForm = this.props
        addTodo && addTodo({
            data: { ...this.state.data, id: nanoid(), date: `${new Date}` },
            todos: this.props.todos
        })
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



export default connect(mapStateToProps, mapDispatchToProps)(Form)

