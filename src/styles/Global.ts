import styled from 'styled-components'
import TextField from '@mui/material/TextField'


export const InputWrapper = styled(TextField)`
    width: ${props => props.isEdit ? '100%' : '50vw'};
    margin-bottom: 30px;
`