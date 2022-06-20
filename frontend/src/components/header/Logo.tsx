import { Box } from '@mui/material'
import LogoPrincipal from '../../assets/images/logos/logo.png'
import { LogoBox } from './logo.styled'


const Logo = () => {
  return (
    <LogoBox component="img" alt='logo' src={LogoPrincipal}
      sx={{
        maxHeight: { xs: 200, sm: 240, md: 140 },
        maxWidth: { xs: 200, sm: 240, md: 140 },
      }} />
  )
}

export default Logo