import styled from 'styled-components'
import FormControlLabel from '@mui/material/FormControlLabel'

export const CheckboxWrapper = styled(FormControlLabel)`
    text-decoration: ${props => props.isConcluded != 'p' ? 'line-through' : 'none'};

`

export const Description = styled.span`
    text-decoration: ${props => props.isConcluded != 'p' ? 'line-through' : 'none'};
`