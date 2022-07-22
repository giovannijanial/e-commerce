import { NavLink } from "react-router-dom"
import { StyledBoxNavgation, StyledItemBox } from "./navgation.styled"

const Navgation = () => {


  return (
    <StyledBoxNavgation>
      <StyledItemBox>
        <NavLink to="/">Inicio</NavLink>
      </StyledItemBox>
      <StyledItemBox>
        <NavLink to="/products">Produtos</NavLink>
      </StyledItemBox>
      <StyledItemBox>
        <NavLink to="/about">Sobre</NavLink>
      </StyledItemBox>
      <StyledItemBox>
        <NavLink to="/contact">Contato</NavLink>
      </StyledItemBox>
    </StyledBoxNavgation>
  )
}

export default Navgation