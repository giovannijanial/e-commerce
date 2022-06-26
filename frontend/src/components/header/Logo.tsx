import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import LogoPrincipal from '../../assets/images/logos/logo.png'


const Logo = () => {
  return (
    <Link to="/">
      <Box component="img" alt='logo' src={LogoPrincipal}
        sx={{
          maxHeight: { xs: 100, sm: 100, md: 100 },
          maxWidth: { xs: 100, sm: 100, md: 100 },
        }} />
    </Link>
  )
}

export default Logo