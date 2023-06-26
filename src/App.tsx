import React from "react"
import Form from "@components/Form"
import TodoList from "@components/TodoList"
import EditModal from "@components/EditModal"
import Container from '@mui/material/Container'

import * as S from '@styles/App'


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

    return (
      <>
        <S.MyContainer maxWidth="lg">
          <S.Title variant="h4" gutterBottom>
            Gerenciamento de Tarefas
          </S.Title>

          <Form />

          <TodoList handleModal={this.handleModal} />
        </S.MyContainer>


        {
          this.state.modal && <EditModal modal={this.state.modal} handleCloseModal={this.handleCloseModal} />
        }

      </>
    )
  }

}

export default App




