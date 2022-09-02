import React from "react"
import PropTypes from 'prop-types';
import NumberInput from './NumberInput';

const TextInput = ({answerValue, setAnswer}) => {
    const validateFirstText = (e) => {
        const value = e.target.value;
        setAnswer("firstText", value);
    }

    const validateSecondText = (e) => {
        const value = e.target.value;
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