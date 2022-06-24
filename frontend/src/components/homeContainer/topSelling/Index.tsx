import { Typography } from '@mui/material'
import React from 'react'
import { StyledGridItem, StyledProductBox } from '../index.styled'
import { StyledTopSelling } from './index.styled'

const HomeTopSelling = () => {
  return (
    <StyledTopSelling container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <StyledGridItem item md={12}>
        <Typography variant="h2" component="h4">
          Top Sellings
        </Typography>
      </StyledGridItem>
      <StyledGridItem item md={4} sm={8} xs={12}>
        <StyledProductBox>
          <p>prod</p>
        </StyledProductBox>
      </StyledGridItem>
      <StyledGridItem item md={4} sm={8} xs={12}>
        <StyledProductBox>
          <p>prod</p>
        </StyledProductBox>
      </StyledGridItem>
      <StyledGridItem item md={4} sm={8} xs={12}>
        <StyledProductBox>
          <p>prod</p>
        </StyledProductBox>
      </StyledGridItem>
    </StyledTopSelling>
  )
}

export default HomeTopSelling