import { ButtonGroup, Button, styled } from '@mui/material'
import React from 'react'

const GroupedButtons = () => {
  return (
    <Container>
      <StyledBtn>-</StyledBtn>
      <Button disabled> 1</Button>
      <StyledBtn>+</StyledBtn>
    </Container>
  )
}


const Container = styled(ButtonGroup)`
   margin-top: 30px;
`;

const StyledBtn = styled(Button)`
  border-radius: 50%
`;
export default GroupedButtons;