import { NavLink } from "react-router-dom"
import { StyledBoxNavgation, StyledItemBox } from "./navgation.styled"

const Navgation = () => {


  return (
    <StyledBoxNavgation>
      <StyledItemBox>
        <NavLink to="/">Home</NavLink>
      </StyledItemBox>
      <StyledItemBox>
        <NavLink to="/products">Products</NavLink>
      </StyledItemBox>
      <StyledItemBox>
        <NavLink to="/users">Users</NavLink>
      </StyledItemBox>
      <StyledItemBox>
        <NavLink to="/sellers">Sellers</NavLink>
      </StyledItemBox>
      <StyledItemBox>
        <NavLink to="/#">Sair</NavLink>
      </StyledItemBox>
    </StyledBoxNavgation>
  )
}

export default Navgation