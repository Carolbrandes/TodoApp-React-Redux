import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';


class Todo extends React.Component {
    state = {
        isConcluded: false
    }

    handleCheckbox = () => {
        this.setState({
            isConcluded: !this.state.isConcluded
        })
    }

    render() {
        
        return (
            <div>
                <FormControlLabel
                    value={this.state.isConcluded}
                    control={<Checkbox />}
                    label={this.props.name}
                    labelPlacement="end"
                    onChange={this.handleCheckbox}
                />

                <span>{this.props.description}</span>

            </div>
        )
    }
}

export default Todo