import { Button, Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';

//!components
import CartItem from './CartItem'
import EmptyCart from './EmptyCart';
import TotalView from './TotalView';
import { payUsingPaytm } from '../../services/api.js';
import { post } from '../../utilities/paytm';

const Cart = () => {

  const {cartItems} = useSelector(state => state.cart);

  const buyNow= async () => {
    let response = await payUsingPaytm({amount:500, email:'abc@example.com'});
    let information = {
      action:'https://securegw-stage.paytm.in/order/process' ,
      params:response,
    }
    post(information);
  };

  return (
    <>
      {
        cartItems.length ?
          <Container container>
            <LeftComponent item  lg={9} md={9} sm= {12} xs={12}>
              <Header>
                <Typography>My Cart ({cartItems.length})</Typography>
              </Header>
              {
                cartItems.map(item =>(
                  <CartItem item={item} />
                ))
              }
              <ButtonWrapper>
                <StyledButton onClick= {() => buyNow()}>Place Order</StyledButton>
              </ButtonWrapper>
            </LeftComponent>
            <Grid item  lg={3} md={3} sm= {12} xs={12}>
              <TotalView cartItems= {cartItems}/>
            </Grid>
          </Container>
        : <EmptyCart/>
      }
    </>
  )
}

const Container = styled(Grid)(({ theme }) => ({
   padding:'30px 135px',   
   [theme.breakpoints.down("md")]: {
    padding:'15px 0',
  },
  }));

const Header = styled(Box)`
   padding:15px 24px; 
   background: #fff;
`;
const ButtonWrapper = styled(Box)`
  padding:16px 22px;
  background: #fff;
  box-shadow: 0 -2px 0 rgba(0 0 0 /10%);
  border-top: 1px solid #f0f0f0;
`;
const StyledButton = styled(Button)`
display: flex;
margin-left: auto;
background: #fb641b;
color: white  ;
width: 250px;
height: 51px;
border-radius: 4px;
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
paddingRight: 15,
[theme.breakpoints.down("md")]: {
  marginBottom: 15,
},
}));

export default Cart;