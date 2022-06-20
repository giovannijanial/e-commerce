import Buttons from './Buttons'
import Logo from './Logo'
import { StyleHeader, StyleContainer } from './index.styled'
import Search from './Search'
import Navbar from '../navbar/Index'

const Header = () => {
  return (
    <StyleHeader>
      <StyleContainer>
        <Logo />
        <Search />
        <Buttons />
      </StyleContainer>
      <Navbar />
    </StyleHeader>
  )
}

export default Header