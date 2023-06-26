import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert'


export const InputWrapper = styled(TextField)`
    width: ${props => props.isEdit ? '100%' : '50vw'};
    margin-bottom: 30px;
`

export const ErrorMessage = styled(Alert)`
    margin-bottom: 20px;
`