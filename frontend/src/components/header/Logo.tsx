import { Box } from '@mui/material'
import LogoPrincipal from '../../assets/images/logos/logo.png'
import { LogoBox } from './logo.styled'


const Logo = () => {
  return (
    <LogoBox component="img" alt='logo' src={LogoPrincipal}
      sx={{
        maxHeight: { xs: 100, sm: 100, md: 100 },
        maxWidth: { xs: 100, sm: 100, md: 100 },
      }} />
  )
}

export default Logo