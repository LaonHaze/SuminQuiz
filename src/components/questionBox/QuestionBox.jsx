import { Box, Card, CardContent } from '@mui/material';
import React, { useState } from 'react';
import QuestionContent from './QuestionContent';

const QuestionBox = () => {
  const [level, setLevel] = useState(0);

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
          minWidth: "55%",
          border: "1px solid #FCCEE2",
          boxShadow: "0px 0px black",
          padding: "2rem",
          maxWidth: "65%"
        }} 
        variant="outlined">
        <CardContent>
          <QuestionContent level={level} setLevel={setLevel}/>
        </CardContent>
      </Card>
    </Box>
  );
}

QuestionBox.propTypes = {

}

export default QuestionBox;