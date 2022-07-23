import { Typography, Box } from '@mui/material'
import { theme } from '../../app.styled'
import { MainContainer } from '../../components/main/main.styled'

const AboutPage = () => {
  return (
    <MainContainer>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4">
          <b>E-commerce</b>
        </Typography>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body1">
            App construído para fins educacionais.
          </Typography>
          <Typography
            variant="body1">
            Produtos retirados do e-commerce da <b>Kabum!</b> todos os produtos e preços são reais!
            Vá ao site oficial e confira!
          </Typography>
        </Box>
      </Box>
    </MainContainer>
  )
}

export default AboutPage