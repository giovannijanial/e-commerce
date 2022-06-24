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
        Usuário
      </StyledItemBox>
      <StyledItemBox>
        Vendedores
      </StyledItemBox>
      <StyledItemBox>
        Sair
      </StyledItemBox>
    </StyledBoxNavgation>
  )
}

export default Navgation