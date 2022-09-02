import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const Intro = ({ days, onSubmit }) => {
  return (
    <React.Fragment>
        <Typography variant="body1">
            안녕~ 쟈기! 
            <br />
            {days}일 기념 퀴즈를 준비해봤어
            <br />
            쟈기가 이런거 약할거 같긴하던데 ㅎㅎ
            <br />
            그래서 최대한 쉬운걸로 춘비했어!
            <br />
            기억을 떠올리며 잘 풀어봐~
            <br />
            화이팅!
        </Typography>
        <Box textAlign="center">
            <Button 
                sx={{marginTop: "30px", boxShadow: "0px 0px black", fontSize: 18}} 
                variant="contained" 
                color="primary" 
                onClick={() => {
                    onSubmit(1);
                }}
            >
                Go!
            </Button>
        </Box>
    </React.Fragment>
  );
}

Intro.propTypes = {
    days: PropTypes.number,
    onSubmit: PropTypes.func,
}

export default Intro;