import { StyledBoxNavgation, StyledItemBox } from "./navgation.styled"
import { Link } from "react-router-dom"

const Navgation = () => {


  return (
    <StyledBoxNavgation>
      <StyledItemBox>
        <Link to="/">Home</Link>
      </StyledItemBox>
      <StyledItemBox>
        <Link to="/products">Products</Link>
      </StyledItemBox>
      <StyledItemBox>
        <Link to="/">Usuário</Link>
      </StyledItemBox>
      <StyledItemBox>
        <Link to="/">Vendedores</Link>
      </StyledItemBox>
      <StyledItemBox>
        <Link to="/">Sair</Link>
      </StyledItemBox>
    </StyledBoxNavgation>
  )
}

export default Navgation