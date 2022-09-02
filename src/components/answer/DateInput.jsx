import { Typography } from '@mui/material';
import React from "react"
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';

const DateInput = ({answerValue, setAnswer}) => {
    const validateMonths = (e) => {
        const value = e.target.value;
        const setValue = value <= 12 ? value > 0 ? parseInt(value) : "" : answerValue.month;
        setAnswer("month", setValue);
    }

    const validateDays = (e) => {
        const value = e.target.value;
        const setValue = value <= 31 ? value > 0 ? parseInt(value) : "" : answerValue.day;
        setAnswer("day", setValue);
    }

    return (      
        <>
            <NumberInput 
                value={answerValue.month || ""}
                maxLength={2}
                onChange={validateMonths}
            />
            <Typography sx={{marginRight: "15px"}} variant="body2">월</Typography>
            <NumberInput 
                value={answerValue.day || ""}
                maxLength={2}
                onChange={validateDays}
            />
            <Typography variant="body2">일</Typography>
        </>
    );
}

DateInput.propTypes = {
    answerValue: PropTypes.object,
    setAnswer: PropTypes.func
}

export default DateInput;