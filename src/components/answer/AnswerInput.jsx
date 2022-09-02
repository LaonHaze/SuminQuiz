import { Box } from '@mui/material';
import React from "react"
import PropTypes from 'prop-types';
import DateInput from './DateInput';
import TextInput from './TextInput';
import SingleTextInput from './SingleTextInput';

const AnswerInput = ({answerValue, setAnswer, answerType, answerSetting}) => {
    const renderInput = () => {
        switch (answerType)
        {
            case "date":
                return <DateInput answerValue={answerValue} setAnswer={setAnswer}/>
            case "text":
                return <TextInput answerValue={answerValue} setAnswer={setAnswer} />
            case "singleText":
                return <SingleTextInput answerValue={answerValue} setAnswer={setAnswer} answerSetting={answerSetting}/>
            default:
                return null
        }
    }

    return (
        <Box sx={{paddingTop: "10px"}} display="flex" justifyContent='center'>         
            {renderInput()}
        </Box>
    );
}

AnswerInput.propTypes = {
    answerValue: PropTypes.object,
    setAnswer: PropTypes.func,
    answerType: PropTypes.string,
    answerSetting: PropTypes.object
}

export default AnswerInput;