import { Container, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../../app.styled';

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 15px 10px 15px;
  box-shadow: 0px 4px 16px rgba(43, 52, 69, 0.1);
`;

export const StyledGridItem = styled(Grid)`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledGridNavigation = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
