import { Box, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0;
    let discount = 0;

    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItems?.length} item)
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span">-₹{discount}</Price>&nbsp;&nbsp;&nbsp;
        </Typography>
        {/* <Typography>Coupons for you
        <Price component = "span">₹10</Price>&nbsp;&nbsp;&nbsp;
        </Typography>         */}
        <Typography>
          Delivery charges
          <Price component="span">₹40</Price>
        </Typography>
        <Typography variant="h6">
          Total Amount
          <Price component="span">₹{price - discount + 40}</Price>
        </Typography>
        <Discount>You will save ₹{discount} on this order! </Discount>
      </Container>
    </Box>
  );
};

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;
const Heading = styled(Typography)`
  color: #878787;
`;
const Container = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  & > h6 {
    margin-bottom: 20px;
  }
`;
const Price = styled(Box)`
  float: right;
`;
const Discount = styled(Typography)`
  color: rgb(56, 142, 60);
  font-weight: 600;
`;

export default TotalView;
