import React from 'react'
import { StyledAside, StyledContainer, StyledGridMain, StyledMid, StyledRight } from './index.styled'

const HomeContainer = () => {
  return (
    <StyledContainer>
      <StyledGridMain container spacing={{ xs: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <StyledAside item md={3} display={{ sm: "none", md: "block", xs: "none" }}>
          <p>hello1</p>
        </StyledAside>
        <StyledMid item md={6} sm={8} xs={12}>
          <p>hello2</p>
        </StyledMid>
        <StyledRight item md={3} sm={8} xs={12}>
          <p>hello3</p>
        </StyledRight>
      </StyledGridMain>
    </StyledContainer >
  )
}

export default HomeContainer