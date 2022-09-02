import { Box, Typography, Button, Grow } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerInput from '../answer/AnswerInput';

const Question = ({ questionNo, questionText, hintText, checkAnswer, answerType, answerSetting, wrongMessage }) => {
    const [answerValues, setAnswerValues] = useState({});
    const [showHint, setShowHint] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(false);

    return (
        <Grow in={true} timeout={1600}>
            <Box>
                <Typography variant="body1">
                    Q{questionNo}. {questionText}
                </Typography>              
                <Box sx={{paddingTop: "10px"}} display="flex" justifyContent='center'>         
                    <AnswerInput 
                        answerValue={answerValues} 
                        setAnswer={(key, value) => {
                                setAnswerValues({...answerValues, [key]: value})
                            }}
                        answerType={answerType}
                        answerSetting={answerSetting}
                    />
                </Box>              
                {
                    hintText ?
                    <Box sx={{marginTop: "20px"}} textAlign="center">
                        {
                            showHint ? 
                            <Typography sx={{"&:hover": {cursor:"pointer"}}} variant="body1" onClick={() => setShowHint(false)}>
                                {hintText}
                            </Typography>
                            : 
                            <Typography sx={{"&:hover": {cursor:"pointer"}}} variant="body1" onClick={() => setShowHint(true)}>
                                힌트!
                            </Typography>
                        }
                    </Box>
                    :
                    <Box>
                        <Typography>&nbsp;</Typography>
                    </Box>
                }  
                <Box sx={{marginTop: "10px"}} textAlign="center">
                    {
                        wrongAnswer? 
                            <Typography>{wrongMessage}</Typography>
                            : 
                            <Typography>&nbsp;</Typography>
                    }
                </Box>
                <Box textAlign="center">
                    <Button 
                        sx={{boxShadow: "0px 0px black", fontSize: 18}}
                        variant="contained" 
                        color="primary"
                        onClick={() => checkAnswer(answerValues, () => {setWrongAnswer(true)})}
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