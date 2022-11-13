import { Box, Typography, styled} from '@mui/material';
import React from 'react'

const EmptyCart = () => {
  
   const imgUrl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
   return (

    <Components>
      <Container>
         <img style={{ width: '17%'}} src = {imgUrl} alt= 'empty-cart' />
         <Typography style={{ color: "#878787" }}>Your Cart is empty!</Typography>
         <Typography style={{ color: "#878787" }}>Add items to it now</Typography>
      </Container>
    </Components>
  )
}

const Components = styled(Box)`
   height: 65vh;
   width: 80%;
   margin: 80px 140px;
   background: #fff;
`;
const Container = styled(Box)`
   text-align: center;
   padding-top: 70px ;
`;



export default EmptyCart