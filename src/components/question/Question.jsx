import { Box, Typography, Button, Grow } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerInput from '../answer/AnswerInput';

const Question = ({ questionNo, questionText, hintText, checkAnswer, answerType, answerSetting }) => {
    const [answerValues, setAnswerValues] = useState({});

    return (
        <Grow in={true} timeout={1600}>
            <Box>
                <Typography variant="body1">
                    Q{questionNo}. {questionText}
                </Typography>
                {
                    hintText ?
                    <Box textAlign="center">
                        <Typography variant="body1">
                            {hintText}
                        </Typography>
                    </Box>
                    :
                    null
                }                
                <Box sx={{paddingTop: "20px"}} display="flex" justifyContent='center'>         
                    <AnswerInput 
                        answerValue={answerValues} 
                        setAnswer={(key, value) => {
                                setAnswerValues({...answerValues, [key]: value})
                            }}
                        answerType={answerType}
                        answerSetting={answerSetting}
                    />
                </Box>
                <Box textAlign="center">
                    <Button 
                        sx={{marginTop: "30px", boxShadow: "0px 0px black", fontSize: 18}}
                        variant="contained" 
                        color="primary"
                        onClick={() => checkAnswer(answerValues)}
                    >
                            정답 확인!
                    </Button>
                </Box>
            </Box>               
        </Grow>
    );
}

Question.propTypes = {
    questionNo: PropTypes.number,
    questionText: PropTypes.string,
    checkAnswer: PropTypes.func,
    answerType: PropTypes.string
}

export default Question;