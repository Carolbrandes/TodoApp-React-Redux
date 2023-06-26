import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import * as S from './style'
import { connect } from 'react-redux'
import { addnewEditTodo, updateTodo } from '@redux/thunk'
import moment from 'moment'
import 'moment/dist/locale/pt-br'

moment.locale('pt-br')

const mapDispatchToProps = (dispatch: any) => ({
    updateTodo: (payload: any) => dispatch(updateTodo(payload)),
    addnewEditTodo: (payload: any) => dispatch(addnewEditTodo(payload))
})

class Todo extends React.Component {
    state = {
        isConcluded: this.props.status == 'p' ? false : true
    }


    handleCheckbox = () => {
        this.setState({
            isConcluded: !this.state.isConcluded
        })

        this.props.updateTodo({ ...this.props.todo, status: this.props.todo.status == 'p' ? 'c' : 'p' })
    }

    handleEdit = (todo: any) => {
        console.log('handleEdit')
        console.log('todo receive =>', todo)
        this.props.addnewEditTodo(todo)
        this.props.handleModal()
    }

    render() {

        const { todo } = this.props
        const { name, description, status, date } = todo


        return (
            <>
                <S.Heading>
                    <Typography variant="h6" gutterBottom>Data: {moment(date).format('LLL')}</Typography>

                    <Typography variant="h6" gutterBottom>
                        Status:
                        <S.Status isConcluded={status}>
                            {status == 'p' ? 'Pendente' : 'Concluído'}
                        </S.Status>
                    </Typography>
                </S.Heading>

                <S.Block>
                    <Typography variant="h6" gutterBottom>Tarefa:</Typography>

                    <S.CheckboxWrapper
                        value={this.state.isConcluded}
                        control={<Checkbox />}
                        label={name}
                        labelPlacement="end"
                        onChange={this.handleCheckbox}
                        isConcluded={status}
                    />
                </S.Block>

                <S.Block>
                    <Typography variant="h6" gutterBottom>Descrição:</Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        {description}
                    </Typography>
                </S.Block>

                <Button onClick={() => this.handleEdit(todo)} variant="outlined">Editar</Button>


            </>
        )
    }
}

export default connect(null, mapDispatchToProps)(Todo)