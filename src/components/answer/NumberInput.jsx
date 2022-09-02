import { TextField } from '@mui/material';
import React from "react"
import PropTypes from 'prop-types';

const NumberInput = ({value, maxLength, onChange, widthSet}) => {
    const curWidth = widthSet ? widthSet : 15;
    const calcWidth = curWidth * maxLength;
    return (      
        <TextField 
            sx={{
                input: {
                    color: '#ffafd8',
                    textAlign: "center",
                    fontSize: 40,
                    caretColor: '#ffafd8',
                    width: calcWidth,
                    height: 15,
                    border: '1.5px solid #FCCEE2'
                }
            }}
            variant="outlined" 
            color="primary"
            value={value|| ""}
            autoComplete='off'
            onChange={onChange}
            inputProps={{
                maxLength: maxLength
            }}
        />
    );
}

NumberInput.propTypes = {
    value: PropTypes.any,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
}

export default NumberInput;