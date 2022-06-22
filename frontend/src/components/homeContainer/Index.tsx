
import { Typography } from '@mui/material'
import BoxMid from './BoxMid'
import BoxRight from './BoxRigth'
import { StyledAside, StyledContainer, StyledGridItem, StyledGridMain, StyledGridMid, StyledMid, StyledProductBox, StyledRight } from './index.styled'
import ListCategories from './ListCategories'

const HomeContainer = () => {
  return (
    <>
      <StyledContainer>
        <StyledGridMain container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <StyledAside item md={3} display={{ sm: "none", md: "block", xs: "none" }}>
            <ListCategories />
          </StyledAside>
          <StyledMid item md={5} sm={8} xs={12}>
            <BoxMid />
          </StyledMid>
          <StyledRight item md={4} sm={8} xs={12}>
            <BoxRight />
          </StyledRight>
        </StyledGridMain>
        <StyledGridMid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <StyledGridItem item md={12}>
            <Typography variant="h2" component="h4">
              h1. Heading
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
        </StyledGridMid>

      </StyledContainer >

    </>

  )
}

export default HomeContainer