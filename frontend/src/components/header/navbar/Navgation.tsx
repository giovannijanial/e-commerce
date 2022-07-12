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
        <NavLink to="/about">About</NavLink>
      </StyledItemBox>
      <StyledItemBox>
        <NavLink to="/contact">Contact</NavLink>
      </StyledItemBox>
    </StyledBoxNavgation>
  )
}

export default Navgation