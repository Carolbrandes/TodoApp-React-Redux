import React from "react"
import Form from "@components/Form"
import TodoList from "@components/TodoList"
import EditModal from "@components/EditModal"




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
        <Form />
        <TodoList handleModal={this.handleModal} />

        {
           this.state.modal && <EditModal modal={this.state.modal} handleCloseModal={this.handleCloseModal}/>
        }
      </>
    )
  }

}

export default App




