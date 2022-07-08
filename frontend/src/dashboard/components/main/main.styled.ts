import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../../../app.styled';

export const DashBoxMain = styled(Box)`
  background-color: ${theme.palette.background.default};
  flex-grow: 1;
  overflow: 'auto';
`;
