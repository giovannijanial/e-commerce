import Buttons from './Buttons'
import Logo from './Logo'
import { StyledGridItem, StyledGrid, StyledGridNavigation } from './index.styled'
import Search from './Search'
import Navbar from './navbar/Index'

const Header = () => {
  return (
    <>
      <StyledGrid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} >
        <StyledGridItem item xs={12} sm={8} md={2}>
          <Logo />
        </StyledGridItem>
        <StyledGridItem item xs={12} sm={6} md={8}>
          <Search />
        </StyledGridItem>
        <StyledGridItem item sm={2} display={{ xs: "none", sm: "block", md: "block" }} >
          <Buttons />
        </StyledGridItem>
        <StyledGridNavigation item sm={12} display={{ xs: "none", sm: "none", md: "block" }}>
          <Navbar />
        </StyledGridNavigation>
      </StyledGrid >
    </>
  )
}

export default Header