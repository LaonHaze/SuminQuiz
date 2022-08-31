import { Box, Card, CardContent, Typography, Button } from '@mui/material';

function QuestionBox() {
  return (
    <Box 
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
      }}
    >
      <Card 
        sx={{ 
          minWidth: 275,
          border: "1px solid #FCCEE2",
          boxShadow: "0px 0px black"
        }} 
        variant="outlined">
        <CardContent>
          <Typography sx={{fontSize: 16}}>
            안녕~ 쟈기!
          </Typography>
          <Typography sx={{fontSize: 16}}>
            쟈기를 위해 질문 몇 개를 준비했어. 기억을 떠올리며 잘 풀어봐~
          </Typography>
          <Box textAlign="center">
            <Button sx={{marginTop: "30px", boxShadow: "0px 0px black", fontSize: 18}} variant="contained" color="primary">Go!</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default QuestionBox;