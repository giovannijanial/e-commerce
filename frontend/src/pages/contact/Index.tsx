import { MainContainer } from '../../components/main/main.styled'
import { Typography, Box, Link } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactPage = () => {
  return (
    <MainContainer>
      <Box>
        <Typography variant="h4" >
          <b>Contato</b>
        </Typography>
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center" }} >
          <Link
            href="https://github.com/giovannijanial"
            sx={{ textDecoration: "none" }}
            color="inherit"
          >
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}>
              <GitHubIcon color="inherit" />
              /giovannijanial
            </Typography>
          </Link>
          <Link
            href="https://www.linkedin.com/in/giovanni-pinheiro-janial-328393230/"
            sx={{ textDecoration: "none" }}
            color="inherit"
          >
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}>
              <LinkedInIcon color="inherit" sx={{ mt: 1 }} />
              /giovannijanial
            </Typography>
          </Link>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center" }}>
            <InstagramIcon color="inherit" sx={{ mt: 1 }} />
            /giovannijanial
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center" }}>
            <TwitterIcon color="inherit" sx={{ mt: 1 }} />
            /giovannijanial
          </Typography>
        </Box>
      </Box>
    </MainContainer>
  )
}

export default ContactPage