import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import * as S from './style'
import { connect } from 'react-redux'
import { addnewEditTodo } from '@redux/thunk'

const mapDispatchToProps = (dispatch: any) => ({
    addnewEditTodo: (payload: any) => dispatch(addnewEditTodo(payload))
})

class Todo extends React.Component {
    state = {
        isConcluded: this.props.status == 'p' ? false : true
    }

    // componentDidUpdate(){
    //     console.log('Todo atualizado')
    //     this.props.editTodo({...this.state, isConcluded: this.state.isConcluded})
    // }

    handleCheckbox = () => {
        this.setState({
            isConcluded: !this.state.isConcluded
        })
    }

    handleEdit = (todo: any) => {
        console.log('handleEdit')
        console.log('todo receive =>', todo)
        this.props.addnewEditTodo(todo)
        this.props.handleModal()
    }

    render() {

        const {todo} = this.props
        const {id, name, description, status, date} = todo
    
        return (
            <div>
                <p>{id}</p>
                <S.CheckboxWrapper
                    value={this.state.isConcluded}
                    control={<Checkbox />}
                    label={name}
                    labelPlacement="end"
                    onChange={this.handleCheckbox}
                    isConcluded={status}
                />

                <S.Description isConcluded={status}>{description}</S.Description>

                <p>{date}</p>

                <p>{status}</p>

                <button onClick={() => this.handleEdit(todo)}>editar</button>


            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Todo)