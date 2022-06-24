import { Typography } from '@mui/material'
import { StyledGridItem, StyledProductBox } from '../index.styled'
import { StyledNewProducts } from './index.styled'

const HomeNewProducts = () => {
  return (
    <StyledNewProducts container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <StyledGridItem item md={12}>
        <Typography variant="h2" component="h4">
          New Products
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
    </StyledNewProducts>
  )
}

export default HomeNewProducts