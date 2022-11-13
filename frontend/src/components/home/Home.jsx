import React, { useEffect } from 'react'
import { Box , styled} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


//!components
import NavBar from './NavBar'
import Banners from './Banners'
import Slide from './Slide'
import MidSlide from './MidSlide'

import { getProducts } from '../../redux/actions/productAction';
import MidSection from './MidSection';

const Home = () => {

  const {products} = useSelector(state => state.getProducts)
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getProducts());
}, [dispatch])


  return (
    <>
      <NavBar />
      <Container>
        <Banners />
        <MidSlide products = {products} title = "Deal of the day" timer = {true} />
        <MidSection/>
        <Slide products = {products} title ="Discounts for you" timer = {false}/>
        <Slide products = {products} title ="Suggesting Items" timer = {false}/>
        <Slide products = {products} title ="Top Section" timer = {false}/>
        <Slide products = {products} title ="Recommended Items" timer = {false}/>
        <Slide products = {products} title ="Trending Offers" timer = {false}/>
        <Slide products = {products} title ="Season's Top Picks" timer = {false}/>
        <Slide products = {products} title ="Top Deals on Accessories" timer = {false}/>
      </Container>
    </>
  );
}

const Container = styled(Box)`
  padding:  10px;
  background: #f1f3f6;
`;


export default Home