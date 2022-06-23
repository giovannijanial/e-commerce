
import { Typography } from '@mui/material'
import BoxMid from './BoxMid'
import BoxRight from './BoxRigth'
import { StyledAside, StyledContainer, StyledGridItem, StyledGridMain, StyledMid, StyledNewProducts, StyledOthers, StyledProductBox, StyledRight, StyledTopSelling } from './index.styled'
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
        <StyledOthers container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <StyledGridItem item md={12}>
            <Typography variant="h2" component="h4">
              Others
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
        </StyledOthers>

      </StyledContainer >

    </>

  )
}

export default HomeContainer