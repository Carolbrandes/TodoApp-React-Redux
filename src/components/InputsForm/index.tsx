import React, { ChangeEvent } from "react"
import Button from '@mui/material/Button'
import * as S from '@styles/Global'
import { IpropsInputForm, Irror } from "@types/index"



class InputsForm extends React.Component<IpropsInputForm> {
    state = {
        errors: []
    }


    handleOnBlur = (event: ChangeEvent<any>, input: string) => {

        if (event.target.value.length == 0) {
            input == 'name' ?
                this.setState({
                    errors: [...this.state.errors.filter((err:Irror) => err.type != 'all'), { message: 'Preencha o nome da atividade', type: 'name' }]
                }) : input == 'description' ? this.setState({
                    errors: [...this.state.errors.filter((err: Irror) => err.type != 'all'), { message: 'Preencha a descrição', type: 'description' }]
                }) : false
        }
    }


    handleChange = (event: ChangeEvent<any>, input: string) => {

        if (input == 'name') {
            this.props.setStateData('name', event.target.value)
            this.setState({
                errors: this.state.errors.filter((error: Irror) => error.type != 'name' && error.type != 'all')
            })
            
        }

        if (input == 'description') {
            this.props.setStateData('description', event.target.value)
            this.setState({
                errors: this.state.errors.filter((error: Irror) => error.type != 'description' && error.type != 'all')
            })
        }

    }


    verifyBeforeHandleClick = () => {
        if (!this.props.data.name && !this.props.data.description) {

            this.setState({
                errors: [{ message: 'Preencha o nome da Atividade e a Descrição', type: 'all' }]
            })
            return
        }

        this.props.handleClick()

    }

    render() {
        const { data, labelButton, isEdit } = this.props
       
        const { name, description } = data

        return (

            <>
                <S.InputWrapper
                    required
                    id="todo-name"
                    placeholder="Tarefa"
                    value={name}
                    onBlur={(event: ChangeEvent<any>) => this.handleOnBlur(event, 'name')}
                    onChange={(event: ChangeEvent<any>) => this.handleChange(event, 'name')}
                    isEdit={isEdit}
                />


                <S.InputWrapper
                    required
                    id="description"
                    placeholder="Descrição"
                    multiline
                    rows={4}
                    value={description}
                    onBlur={(event: ChangeEvent<any>) => this.handleOnBlur(event, 'description')}
                    onChange={(event: ChangeEvent<any>) => this.handleChange(event, 'description')}
                    isEdit={isEdit}
                />


                {
                    this.state.errors?.map((error: Irror) => <S.ErrorMessage key={error.type} severity="error">{error.message}</S.ErrorMessage>)
                }

                <div>
                    <Button variant="contained" onClick={this.verifyBeforeHandleClick}>{labelButton}</Button>
                </div>
            </>
        )
    }
}

export default InputsForm