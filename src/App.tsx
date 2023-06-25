import React from "react"
import { connect } from 'react-redux'
import Form from "@components/Form"
import TodoList from "@components/TodoList"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const mapStateToProps = (state: any) => {
  return {
    todoEdit: state.todoForEdition
  }
}

class App extends React.Component {
  state = {
    modal: false
  }

  handleModal = () => this.setState({
    modal: !this.state.modal
  })

  handleCloseModal = () => this.setState({
    modal: false
  })

  render() {

    const {todoEdit} = this.props

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
      <>
        <Form />
        <TodoList handleModal={this.handleModal} />

        {
          this.state.modal && <Modal
            open={this.state.modal}
            onClose={this.handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {todoEdit.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {todoEdit.description}
              </Typography>
            </Box>
          </Modal>
        }
      </>
    )
  }

}

export default connect(mapStateToProps)(App)




