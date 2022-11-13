import { AppBar, Box, Toolbar, styled, Typography,Drawer, IconButton, List, ListItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

//!components
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const Header = () => {
  const logo =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const plusLogo =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CustomButtonsList = () => (
    <Box onClick = {handleClose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <Component to="/">
          <img src={logo} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImg
              src={plusLogo}
              alt="plus+logo"
              style={{ color: "#FFE500" }}
            />
          </Box>
        </Component>
        <Search />
        <RightWrapper>
          <CustomButtons />
        </RightWrapper>
        <MenuButton color="inherit" onClick = {handleOpen}>
            <MenuIcon />
        </MenuButton>
        <Drawer open ={open} onClose ={handleClose}>
          {CustomButtonsList()}
        </Drawer>
      </Toolbar>
    </StyledHeader>
  );
};

const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  cursor: pointer;
  text-decoration: none;
  color : inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  font-weight: bold;
`;
const PlusImg = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const RightWrapper = styled(Box)(({ theme }) =>({
  margin:" 0 5% 0 auto",
  [theme.breakpoints.down('sm')] : {
   display: "none",
   justifyContent:"space-between",
  }
  }))

  const MenuButton = styled(IconButton)(({ theme }) =>({
      display: "none",
    [theme.breakpoints.down('md')] : {
      display: "block",
      justifyContent:"space-between",
     }
     }))

export default Header;
