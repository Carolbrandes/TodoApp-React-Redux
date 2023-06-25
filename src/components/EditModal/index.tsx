import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux'
import Button from '@mui/material/Button';
import React from 'react';
import {updateTodo} from '@redux/thunk'


const mapStateToProps = (state: any) => {
    return {
        todoEdit: state.todoForEdition
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    updateTodo: (payload: any) => dispatch(updateTodo(payload))
})

class EditModal extends React.Component {
    state = {
        name: this.props.todoEdit.name,
        description: this.props.todoEdit.description,
        id: this.props.todoEdit.id,
        status: this.props.todoEdit.status
    }

    handleInput = (event: any, id: string) => {
        id == 'name' ? this.setState({
            name: event.target.value
        }) : this.setState({
            description: event.target.value
        })
    }

    handleClick = () => {
        this.props.updateTodo(this.state)

        setTimeout(() => {
            this.props.handleCloseModal()
        }, 500);
    }


    render() {
        const { modal, handleCloseModal, todoEdit } = this.props
        const { name, description } = todoEdit


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
                    <TextField
                        id="name"
                        label="Tarefa"
                        defaultValue={name}
                        value={this.state.name}
                        onChange={(event) => this.handleInput(event, 'name')}
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue={description}
                        value={this.state.description}
                        onChange={(event) => this.handleInput(event, 'description')}
                    />

                    <Button onClick={this.handleClick} variant="contained">Salvar Alterações</Button>
                </Box>
            </Modal>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)