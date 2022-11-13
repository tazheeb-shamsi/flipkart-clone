import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Box, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/actions/productAction";

const Search = () => {

const [text, setText] = useState('');  

const {products} = useSelector(state => state.getProducts);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getProducts())
}, [dispatch]);

const onInputChange = (text) => {
  setText(text);
};

  return (
    <SearchContainer>
      <SearchInput 
        placeholder="Search for products, brands and more"
        onChange={(e) => onInputChange(e.target.value)}
        value = {text}
       />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {
        text && 
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes( text.toLowerCase())).map(product =>(
              <ListItem>
              <Link to= {`/products/${product.id}`} 
                  onClick = {() =>  setText('')}
                  style= {{textDecoration: 'none', color: 'inherit'}}
                >
                {product.title.longTitle}
              </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SearchContainer>
  );
};

const SearchContainer = styled(Box)`
  background-color: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display:flex;
`;

const SearchInput = styled(InputBase)`
padding-left: 20px;
width: 100%;
font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
color: "#2874f0";
padding: "5px";
display: flex; 
`;

const ListWrapper = styled(List)`
  position:absolute;
  background:#ffffff;
  color: #000;
  margin-top: 36px;
`;

export default Search;
