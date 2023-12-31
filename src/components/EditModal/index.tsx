import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { connect } from 'react-redux'
import { updateTodo } from '@redux/thunk'
import InputsForm from '@components/InputsForm'
import { IPayloadEdit, IState, IpropsModalEdit } from '@types/index'
import {  Dispatch } from 'redux'


const mapStateToProps = (state: IState) => {
    return {
        todoEdit: state.todoForEdition,
        todos: state.todoList
    }
}

const mapDispatchToProps= (dispatch: Dispatch<any>) => ({
    updateTodo: (payload: IPayloadEdit) => dispatch(updateTodo(payload))
})

class EditModal extends React.Component<IpropsModalEdit> {
    state = {
        data:{
            name: this?.props?.todoEdit?.name,
            description: this?.props?.todoEdit?.description,
            id: this?.props?.todoEdit?.id,
            status: this?.props?.todoEdit?.status,
            date: this?.props?.todoEdit?.date
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
        const {updateTodo, handleCloseModal}:IpropsModalEdit  = this.props

        updateTodo({
            todos: this.props.todos,
            data: this.state.data
        })

        setTimeout(() => {
            handleCloseModal()
        }, 500);
    }


    render() {
        const { modal, handleCloseModal } = this.props


        const style = {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        }


        return (

            <Modal
                open={modal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <InputsForm
                        labelButton="Salvar"
                        data={this.state.data}
                        setStateData={this.setStateData}
                        handleClick={this.handleClick}
                        isEdit
                    />
                </Box>
            </Modal>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)