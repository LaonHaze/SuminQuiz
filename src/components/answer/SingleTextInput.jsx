import { Typography } from '@mui/material';
import React from "react"
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';

const SingleTextInput = ({answerValue, setAnswer, answerSetting}) => {
    const validateText = (e) => {
        const value = e.target.value;
        
        value.length <= answerSetting.maxLength ? setAnswer("text", value) : setAnswer("text", answerValue.text);
    }

    return (
        <>
            {
                answerSetting && answerSetting.preText ?
                    <Typography sx={{marginRight: "15px"}} variant="body2">{answerSetting.preText}</Typography>
                    : null
            }
            <NumberInput 
                value={answerValue.text || ""}
                maxLength={answerSetting.maxLength}
                onChange={validateText}
                widthSet={answerSetting.inputWidth ? answerSetting.inputWidth : 17}
            />
        </>
    );
}

SingleTextInput.propTypes = {
    answerValue: PropTypes.object,
    setAnswer: PropTypes.func,
    answerSetting: PropTypes.object,
}

export default SingleTextInput;