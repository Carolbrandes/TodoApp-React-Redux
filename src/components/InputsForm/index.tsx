import React, { ChangeEvent } from "react";
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import * as S from '@styles/Global'



class InputsForm extends React.Component {

    handleAddError = (newError: any) => this.props.handleError(newError)
   

    handleOnBlur = (event: ChangeEvent<HTMLInputElement>, input: string) => {
        console.log('handleOnBlur')
        console.log('input =>', input)
        if (event.target.value.length == 0) {

            input == 'name' ?
                this.handleAddError({ message: 'Preencha o nome da atividade', type: 'name' }) :
                this.handleAddError({ message: 'Preencha a descrição', type: 'description' })
        }
    }


    handleChange = (event: ChangeEvent<HTMLInputElement>, input: string) => {

        if (input == 'name') {
            this.props.handleData(event.target.value, 'name')
            this.props.handleFilterErrors('name')
            return
        }

        this.props.handleData(event.target.value, 'description')
        this.props.handleFilterErrors('description')

    }


    render() {
        const { data, errors, handleClick, labelButton } = this.props
        console.log("🚀 ~ file: index.tsx:51 ~ InputsForm ~ render ~ errors:", errors)
        const { name, description } = data

        return (
            <Box component="form">

                <S.InputWrapper
                    required
                    id="todo-name"
                    placeholder="Tarefa"
                    value={name}
                    onBlur={(event: ChangeEvent<HTMLInputElement>) => this.handleOnBlur(event, 'name')}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => this.handleChange(event, 'name')}
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
                />


                {
                    errors?.map((error) => <S.ErrorMessage key={error.type} severity="error">{error.message}</S.ErrorMessage>)
                }

                <div>
                    <Button variant="contained" onClick={handleClick}>{labelButton}</Button>
                </div>
            </Box>
        )
    }
}

export default InputsForm