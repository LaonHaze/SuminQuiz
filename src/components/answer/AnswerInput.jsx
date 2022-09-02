import { Box, Typography, TextField } from '@mui/material';
import React from "react"
import PropTypes from 'prop-types';

const AnswerInput = ({answerValue, setAnswer}) => {  
    const validateMonths = (e) => {
        const value = parseInt(e.target.value);
        const setValue = value <= 12 ? value > 0 ? value : "" : answerValue.month;
        setAnswer("month", setValue);
    }

    const validateDays = (e) => {
        const value = parseInt(e.target.value);
        const setValue = value <= 31 ? value > 0 ? value : "" : answerValue.day;
        setAnswer("day", setValue);
    }

    return (
        <Box sx={{paddingTop: "20px"}} display="flex" justifyContent='center'>         
            <TextField 
                sx={{
                    input: {
                        color: '#ffafd8',
                        textAlign: "center",
                        fontSize: 40,
                        caretColor: '#ffafd8',
                        width: 30,
                        height: 15,
                        border: '1.5px solid #FCCEE2'
                    }
                }}
                variant="outlined" 
                color="primary"
                value={answerValue.month || ""}
                autoComplete='off'
                onChange={validateMonths}
                inputProps={{
                    maxLength: 2
                }}
            />
            <Typography sx={{marginRight: "15px"}} variant="body2">월</Typography>
            <TextField 
                sx={{
                    input: {
                        color: '#ffafd8',
                        textAlign: "center",
                        fontSize: 40,
                        caretColor: '#ffafd8',
                        width: 30,
                        height: 15,
                        border: '1.5px solid #FCCEE2'
                    }
                }}
                variant="outlined" 
                color="primary"
                value={answerValue.day || ""}
                autoComplete='off'
                onChange={validateDays}
                inputProps={{
                    maxLength: 2
                }}
            />
            <Typography variant="body2">일</Typography>
        </Box>
    );
}

AnswerInput.propTypes = {
    answerValue: PropTypes.object,
    setAnswer: PropTypes.func
}

export default AnswerInput;