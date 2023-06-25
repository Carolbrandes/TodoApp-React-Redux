import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import * as S from './style'
import { connect } from 'react-redux'
import { updateTodo } from '@redux/thunk'

const mapDispatchToProps = (dispatch: any) => ({
    updateTodo: (payload: any) => dispatch(updateTodo(payload))
})

class Todo extends React.Component {
    state = {
        isConcluded: this.props.status == 'p' ? false : true
    }


    handleCheckbox = () => {
        this.setState({
            isConcluded: !this.state.isConcluded
        })

        this.props.updateTodo({...this.props.todo, status: this.props.todo.status == 'p' ? 'c' : 'p'})
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