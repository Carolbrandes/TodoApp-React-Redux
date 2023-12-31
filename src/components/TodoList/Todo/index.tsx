import React, { ChangeEvent } from 'react'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Unstable_Grid2'
import * as S from './style'
import { connect } from 'react-redux'
import { addnewEditTodo, updateTodo } from '@redux/thunk'
import moment from 'moment'
import 'moment/dist/locale/pt-br'
import { IState, ITodo, IpropsTodo } from '@types/index'
import { Dispatch } from 'redux'

moment.locale('pt-br')


const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    updateTodo: (payload: any) => dispatch(updateTodo(payload)),
    addnewEditTodo: (payload: any) => dispatch(addnewEditTodo(payload))
})

class Todo extends React.Component<IpropsTodo> {
    state = {
        isConcluded: this.props.status == 'p' ? false : true
    }


    handleCheckbox = (event: ChangeEvent<any>) => {
        this.setState({
            isConcluded: event.target.checked
        })

        this.props.updateTodo({
            todos: this.props.todosLocalStorage,
            data: {...this.props.todo, status: this.props.todo.status == 'p' ? 'c' : 'p'}
        })
    }

    handleEdit = (todo: ITodo) => {
        this.props.addnewEditTodo(todo)
        this.props.handleModal()
    }

    render() {

        const { todo } = this.props
        const { name, description, status, date } = todo


        return (
            <Grid xs={6} md={4}>
                <S.CardContainer isConcluded={status} sx={{ minWidth: 150 }}>
                    <CardContent>
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
                                checked={!this.state.isConcluded}
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
                    </CardContent>
                </S.CardContainer>
            </Grid>
        )
    }
}

export default connect(null, mapDispatchToProps)(Todo)