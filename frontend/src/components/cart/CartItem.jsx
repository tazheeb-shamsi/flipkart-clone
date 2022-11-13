import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

//!components
import { addEllipsis } from "../../utilities/commonUtilities";
import GroupedButtons from "./GroupedButtons";
import {removeFromCart} from '../../redux/actions/cartActions';

const CartItem = ({ item }) => {

   
  const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container>
      <LeftComponent>
        <img style={{ width:110, height:110 }} src={item.url} alt="product" />
        <GroupedButtons/>
      </LeftComponent>
      <RightComponent>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>Seller: RetailNet
         <Box component= "span">
            <img style={{ width:50, marginLeft:10 }} src={fassured} alt="Flipkart"  />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20px 0"}}>
            <Box component="span" style={{ fontSize: 18, fontWeight:600 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "#878787" }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "#388E3C" }}>{item.price.discount} off</Box>
         </Typography>
         <RemoveBtn onClick={() => removeItemFromCart(item.id)}>Remove</RemoveBtn>
      </RightComponent>
    </Container>
  );
};
 

const Container = styled(Box)`
 border-top: 1px solid #f0f0f0;
 display: flex;
 background: #ffff;
`;
const LeftComponent = styled(Box)`
 margin: 20px;
 display: flex;
 flex-direction: column;
`;
const RightComponent = styled(Box)`
 margin: 20px;
`;
const SmallText = styled(Box)`
color: #878787;
font-size: 14px;
margin-top: 10px;
`;
const RemoveBtn = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

export default CartItem;
