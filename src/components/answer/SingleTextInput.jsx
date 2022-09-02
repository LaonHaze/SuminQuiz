import { Typography } from '@mui/material';
import React, { useEffect } from "react"
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';

const SingleTextInput = ({answerValue, setAnswer, answerSetting}) => {  
    useEffect(() => {
        if(answerSetting.presetAnswer) {
            setAnswer("text", answerSetting.presetAnswer)
        }
    }, [answerSetting.presetAnswer, setAnswer]);

    const validateText = (e) => {
        const value = e.target.value;

        const englishCheck = new RegExp("^[a-zA-Z0-9]*$");
        const koreanCheck = new RegExp("^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$");

        if(answerSetting.presetAnswer) {
            setAnswer("text", answerSetting.presetAnswer)
            return;
        }

        if (answerSetting.englishOnly && !englishCheck.test(value)) {
            setAnswer("text", answerValue.text)
            return;
        }

        if (answerSetting.koreanOnly && !koreanCheck.test(value)) {
            setAnswer("text", answerValue.text)
            return;
        }
        
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
            {
                answerSetting && answerSetting.postText ?
                    <Typography sx={{marginRight: "15px"}} variant="body2">{answerSetting.postText}</Typography>
                    : null
            }
        </>
    );
}

SingleTextInput.propTypes = {
    answerValue: PropTypes.object,
    setAnswer: PropTypes.func,
    answerSetting: PropTypes.object,
}

export default SingleTextInput;