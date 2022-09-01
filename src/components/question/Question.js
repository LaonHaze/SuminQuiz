import { Box, Typography, Button, Grow, TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ questionNo, questionText }) => {
  return (
    <React.Fragment>
        <Grow in={true} timeout={1200}>
            <Typography variant="body1">
                Q{questionNo}. {questionText}
            </Typography>
        </Grow>
        <Grow in={true} timeout={4000}>
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
                            borderColor: '#ffafd8 !important'
                        }
                    }}
                    variant="outlined" 
                    color="primary"
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
                            height: 15
                        }
                    }}
                    variant="outlined" 
                    color="primary"
                    inputProps={{
                        maxLength: 2
                    }}
                />
                <Typography variant="body2">일</Typography>
            </Box>
        </Grow>
        <Grow in={true} timeout={4000}>
            <Box textAlign="center">
                <Button sx={{marginTop: "30px", boxShadow: "0px 0px black", fontSize: 18}} variant="contained" color="primary">정답 확인!</Button>
            </Box>
        </Grow>
    </React.Fragment>
  );
}

Question.propTypes = {
    questionNo: PropTypes.number,
    questionText: PropTypes.string
}

export default Question;