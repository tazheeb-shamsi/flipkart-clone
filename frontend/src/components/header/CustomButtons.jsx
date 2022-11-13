import { Box, Button, Typography, styled, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

//!components
import LoginDialog from "../Login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const CustomButtons = () => {

  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const {cartItems} = useSelector(state => state.cart);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginBtn variant="contained" onClick={() => openDialog()}>
          {" "}
          Login{" "}
        </LoginBtn>
      )}
      <Typography style={{ marginTop: 3, width: 150, cursor: "pointer" }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: "3px", cursor: "pointer" }}>
        More
      </Typography>

      <Container to= "/cart">
        <Badge badgeContent= {cartItems?.length} color='primary'>
        <ShoppingCart />
        </Badge>
        <Typography style={{marginLeft:7}}>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex", 
  margin: "0px 3% 0px 1%",
  " & > *": {
    marginRight: '40px !Important',
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  textDecoration: 'none',
  color:'inherit',
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginBtn = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  margin-left: 5px;
`;

export default CustomButtons;
