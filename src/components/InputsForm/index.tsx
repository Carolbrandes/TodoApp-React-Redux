import React, { ChangeEvent } from "react"
import Button from '@mui/material/Button'
import * as S from '@styles/Global'



class InputsForm extends React.Component {
    state = {
        errors: []
    }


    handleOnBlur = (event: ChangeEvent<HTMLInputElement>, input: string) => {

        if (event.target.value.length == 0) {
            input == 'name' ?
                this.setState({
                    errors: [...this.state.errors.filter(err => err.type != 'all'), { message: 'Preencha o nome da atividade', type: 'name' }]
                }) : input == 'description' ? this.setState({
                    errors: [...this.state.errors.filter(err => err.type != 'all'), { message: 'Preencha a descrição', type: 'description' }]
                }) : false
        }
    }


    handleChange = (event: ChangeEvent<HTMLInputElement>, input: string) => {

        if (input == 'name') {
            this.props.setStateData('name', event.target.value)
            this.setState({
                errors: this.state.errors.filter((error: any) => error.type != 'name' && error.type != 'all')
            })
            
        }

        if (input == 'description') {
            this.props.setStateData('description', event.target.value)
            this.setState({
                errors: this.state.errors.filter((error: any) => error.type != 'description' && error.type != 'all')
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
                    onBlur={(event: ChangeEvent<HTMLInputElement>) => this.handleOnBlur(event, 'name')}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'name')}
                    isEdit={isEdit}
                />


                <S.InputWrapper
                    required
                    id="description"
                    placeholder="Descrição"
                    multiline
                    rows={4}
                    value={description}
                    onBlur={(event: ChangeEvent<HTMLInputElement>) => this.handleOnBlur(event, 'description')}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'description')}
                    isEdit={isEdit}
                />


                {
                    this.state.errors?.map((error) => <S.ErrorMessage key={error.type} severity="error">{error.message}</S.ErrorMessage>)
                }

                <div>
                    <Button variant="contained" onClick={this.verifyBeforeHandleClick}>{labelButton}</Button>
                </div>
            </>
        )
    }
}

export default InputsForm