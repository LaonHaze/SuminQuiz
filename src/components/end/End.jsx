import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const End = ({ onSubmit }) => {
  return (
    <React.Fragment>
        <Typography variant="body1">
            쟈기가 해낼줄 알았어!
            <br />
            사실 뭐 딱히 준비해 놓은건 없어 ㅎㅎ
            <br />
            여기~ 저장해둬 ㅋㅋㅋ
        </Typography>
        <Box textAlign="center">
            <Box
                component="img"
                sx={{
                    width: "60%",
                    opacity: 1
                }}
                alt="flowers"
                src="https://cdn.shopify.com/s/files/1/0591/1452/0785/products/luxe-rose-fresh-roses-in-a-vase-100-light-pink-roses-roses-29180227846353_300x.jpg?v=1634956937"
            />
        </Box>
        <Box sx={{marginTop: "20px"}} textAlign="center">
            <Card 
                sx={{ 
                    border: "1px solid #FCCEE2",
                    boxShadow: "0px 0px black",
                    padding: "0.5rem",
                    backgroundColor: "#FCCEE2",
                }} 
                variant="outlined">
                <CardContent>
                    <Typography variant="body3">
                        소원권 1회<br /><br />
                    </Typography>
                    <Typography sx={{marginTop: "20px"}} variant="body4">
                        재영이의 능력으로 이룰수 있는 소원을<br /> 언제든 한번! 이루어준다 <br /><br />
                        주의사항:<br /> 하수민이 반재영에게만 사용 가능!
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        <Box textAlign="center">
            <Button 
                sx={{marginTop: "30px", boxShadow: "0px 0px black", fontSize: 18}} 
                variant="contained" 
                color="primary" 
                onClick={() => {
                    onSubmit(0);
                }}
            >
                다시하기
            </Button>
        </Box>
    </React.Fragment>
  );
}

End.propTypes = {
    onSubmit: PropTypes.func,
}

export default End;