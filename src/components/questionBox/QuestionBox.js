import { Box, Card, CardContent } from '@mui/material';
import Intro from '../intro/Intro';
import Question from '../question/Question';
import React, { useState } from 'react';



const QuestionBox = () => {
  const [level, setLevel] = useState(0);

  const GetContent = () => {
    if (level === 0) {
      return <Intro days={100} onSubmit={setLevel}/> 
    }
    else {
      return <Question 
      questionNo={level} 
      questionText="우리가 사귀기 시작한 날은?" 
    />
    }
  }

  return (
    <Box 
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        minHeight: '80vh',
      }}
    >
      <Card 
        sx={{ 
          minWidth: 275,
          border: "1px solid #FCCEE2",
          boxShadow: "0px 0px black",
          padding: "2rem"
        }} 
        variant="outlined">
        <CardContent>
          {GetContent()}
        </CardContent>
      </Card>
    </Box>
  );
}

export default QuestionBox;