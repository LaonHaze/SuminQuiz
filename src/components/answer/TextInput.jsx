import React from "react"
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';

const TextInput = ({answerValue, setAnswer, answerSetting}) => {
    const validateFirstText = (e) => {
        const value = e.target.value;
        const englishCheck = new RegExp("^[a-zA-Z]*$");

        if (answerSetting.englishOnly && !englishCheck.test(value)) {
            setAnswer("firstText", answerValue.firstText)
            return;
        }

        setAnswer("firstText", value);
    }

    const validateSecondText = (e) => {
        const value = e.target.value;
        const englishCheck = new RegExp("^[a-zA-Z]*$");

        if (answerSetting.englishOnly && !englishCheck.test(value)) {
            setAnswer("secondText", answerValue.secondText)
            return;
        }

        setAnswer("secondText", value);
    }


    return (
        <>
            <NumberInput 
                value={answerValue.firstText || ""}
                maxLength={5}
                onChange={validateFirstText}
                widthSet={17}
            />
            <p>&nbsp;&nbsp;</p>
            <NumberInput
                value={answerValue.secondText || ""}
                maxLength={3}
                onChange={validateSecondText}
                widthSet={17}
            />
        </>
    );
}

TextInput.propTypes = {
    answerValue: PropTypes.object,
    setAnswer: PropTypes.func
}

export default TextInput;