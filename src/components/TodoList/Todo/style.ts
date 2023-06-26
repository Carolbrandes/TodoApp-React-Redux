import styled from 'styled-components'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'

export const CheckboxWrapper = styled(FormControlLabel)`
    text-decoration: ${props => props.isConcluded != 'p' ? 'line-through' : 'none'};
`

export const Heading = styled.div`
    display: flex;

    h6{
        margin-right: 20px;
    }
`

export const Status = styled(Typography)`
    color: ${props => props.isConcluded != 'p' ? '#2bbb2b' : '#bb7c2b'};
`

export const Block = styled.div`
    padding: 20px 0;
`