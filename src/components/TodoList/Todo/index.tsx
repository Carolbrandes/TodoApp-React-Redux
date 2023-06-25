import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import * as S from './style'
import { connect } from 'react-redux'
import { editTodo } from '@redux/actions'

const mapDispatchToProps = (dispatch: any) => ({
    editTodo: (payload: any) => dispatch(editTodo(payload))
})

class Todo extends React.Component {
    state = {
        isConcluded: this.props.isConcluded
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

    render() {
        
        return (
            <div>
                <S.CheckboxWrapper
                    value={this.state.isConcluded}
                    control={<Checkbox />}
                    label={this.props.name}
                    labelPlacement="end"
                    onChange={this.handleCheckbox}
                    isConcluded={this.state.isConcluded}
                />

                <S.Description isConcluded={this.state.isConcluded}>{this.props.description}</S.Description>

            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Todo)