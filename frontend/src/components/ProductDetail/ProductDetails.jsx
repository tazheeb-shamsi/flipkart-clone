import { Box, styled, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";
import {LocalOffer as Badge }from '@mui/icons-material';

const ProductDetails = ({ product }) => {
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const date = new Date(new Date().getTime()+(4.32e+8));

  return (
    <>
      <Typography style= {{fontSize: "18px", fontWeight:700}}>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings and 1 Review(s)
        <Box component="span">
          <img src={fassured} alt="assured" style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>{product.price.discount} off</Box>
      </Typography>
      <Typography> Available Offers </Typography>  
      <SmallText>
         <Typography><StyledBadge/> 10% off on ICICI Bank Credit Cards (incl. EMI Txns), up to ₹1,500. On orders of ₹5,000 and aboveT&C</Typography>
         <Typography><StyledBadge/> 10% off on Kotak Bank Credit Cards (incl. EMI Txns), up to ₹1,500. On orders of ₹5,000 and above</Typography>
         <Typography><StyledBadge/> 10% off on ICICI Bank Debit Cards (incl. EMI Txns) up to ₹500. On orders of ₹5,000 and aboveT&C</Typography>
         <Typography><StyledBadge/> Buy this product and get upto ₹500 off on Flipkart FurnitureKnow More</Typography>
      </SmallText>
      <Table>
         <TableBody>
            <TableRow>
               <TableCell style={{ color: "#878787"}}>Delivery</TableCell>
               <TableCell style={{ fontWeight: 660}}>Delivered by:  {date.toDateString()} | ₹40</TableCell>
            </TableRow>
            <TableRow>
               <TableCell style={{ color: "#878787"}}>Warranty</TableCell>
               <TableCell style={{ fontWeight: 660}}>No Warranty</TableCell>
            </TableRow>
            <TableRow>
               <TableCell style={{ color: "#878787"}}>Seller</TableCell>
               <TableCell >
               <Box component="span" style={{ color: "#2874f0"}}> SuperComNet</Box>
               <Typography>14 Days return policy</Typography>
               <Typography>GST invoice available</Typography>
               </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <img src = {adURL} alt=" superCoin" style={{width:390}} />
              </TableCell>
            </TableRow>
            <TableRow>
               <TableCell style={{ color: "#878787"}}>Description</TableCell>
               <TableCell style={{ fontWeight: 500}}>{product.description}</TableCell>
            </TableRow>
         </TableBody>
      </Table>
    </>
  );
};

const SmallText = styled(Box)`
font-size: 14px;
vertical-align:baseline;
& > p {
   font-size: 14px;
   margin-top: 10px;
}
`;

const StyledBadge = styled(Badge)`
 margin-right: 10px;
 color: #26a541;
 font-size: 15px;
`;

export default ProductDetails;
