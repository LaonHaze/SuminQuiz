import { Box, Card, CardContent, LinearProgress, Grid } from '@mui/material';
import React, { useState } from 'react';
import QuestionContent from './QuestionContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const QuestionBox = () => {
  const [level, setLevel] = useState(0);
  const [progress, setProgress] = useState(0);

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
          minWidth: "65%",
          border: "1px solid #FCCEE2",
          boxShadow: "0px 0px black",
          padding: "2rem",
          maxWidth: "65%",
          minHeight: "33vh",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column"
        }} 
        variant="outlined">
        <CardContent sx={{minHeight: "33vh"}}>
          {
            level > 0 ?
            <Grid container>          
              <Grid xs={1} item>
                <FavoriteBorderIcon xs={{top:"-20px"}} color="primary"/>
              </Grid>
              <Grid xs={10} item>
                <LinearProgress 
                  sx={{
                    height:13,
                    borderRadius: 5,
                    marginTop:0.6
                  }}
                  variant="determinate" 
                  value={progress} 
                />
              </Grid>
              <Grid xs={1} item>
                <FavoriteIcon xs={{top:"-20px"}} color="primary"/>
              </Grid>
            </Grid>
            : null
          }
          <QuestionContent 
            level={level} 
            setLevel={setLevel} 
            setProgress={setProgress} 
          />
        </CardContent>
      </Card>
    </Box>
  );
}

QuestionBox.propTypes = {

}

export default QuestionBox;