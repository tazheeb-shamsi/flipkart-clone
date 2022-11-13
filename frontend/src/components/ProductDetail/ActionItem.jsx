import { Box, Button, styled } from '@mui/material';
import React, { useState } from 'react'
import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../services/api.js';
import { post } from '../../utilities/paytm';


const ActionItem = ({product}) => {

  const navigate= useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const { id} = product;


  const addItemToCart = () => {
    dispatch(addToCart(id,quantity));
    navigate('/cart')
  }

  const buyNow= async () => {
    let response = await payUsingPaytm({amount:500, email:'abc@example.com'});
    let information = {
      action:'https://securegw-stage.paytm.in/order/process' ,
      params:response,
    }
    post(information);
  };

  return (
    <LeftContainer>
    <Box style={{width: '90%', padding:'15px 20px',  border: '1px solid #f0f0f0',}}>
      <Image src={product.detailUrl} alt= 'img' />
    </Box>
      <ActionButton variant="contained" onClick= {() => addItemToCart()} style= {{marginRight: 10, background:'#ff9f00'}}><Cart/>Add to Cart</ActionButton>
      <ActionButton variant="contained" onClick= {() => buyNow()} style= {{background:'#fb541b'}}><Flash/>Buy Now</ActionButton>
    </LeftContainer>
  )
}

const LeftContainer = styled(Box)(({ theme }) =>({
minWidth: "40%",
padding:" 40px 0 0 80px",
[theme.breakpoints.down('lg')] : {
  padding :" 20px 40px",
}
}))

const Image = styled('img')({
    width: "95%",
    padding: '15px',
});

const ActionButton = styled(Button)(({ theme }) =>({
   width: "48%",
   height: "50px", 
   marginTop:"5px"  ,
   borderRadius: "4px",
   [theme.breakpoints.down('lg')] : {
    width: "46%",
  },
   [theme.breakpoints.down('md')] : {
    width: "48%",
  }
  }))


export default ActionItem;