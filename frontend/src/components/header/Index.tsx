import Buttons from './Buttons'
import Logo from './Logo'
import { StyledGridItem, StyledGrid, StyledGridNavigation } from './index.styled'
import Search from './Search'
import Navbar from '../navbar/Index'
import { Grid } from '@mui/material'

const Header = () => {
  return (
    <>
      <StyledGrid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} >
        <StyledGridItem item xs={2} >
          <Logo />
        </StyledGridItem>
        <StyledGridItem item xs={8} >
          <Search />
        </StyledGridItem>
        <StyledGridItem item xs={2} >
          <Buttons />
        </StyledGridItem>
        <StyledGridNavigation item xs={12}>
          <Navbar />
        </StyledGridNavigation>
      </StyledGrid >
    </>
  )
}

export default Header