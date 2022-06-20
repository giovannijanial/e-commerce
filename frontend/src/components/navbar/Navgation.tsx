import { StyledBoxNavgation, StyledItemBox } from "./navgation.styled"

const Navgation = () => {


  return (
    <StyledBoxNavgation>
      <StyledItemBox>
        Home
      </StyledItemBox>
      <StyledItemBox>
        Produtos
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