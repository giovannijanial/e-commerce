import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../../../app.styled';

export const StyledBoxNavgation = styled(Box)`
  width: 500px;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 32px;
  a {
    text-decoration: none;
    color: ${theme.palette.secondary.main};
  }
`;

export const StyledItemBox = styled(Box)`
  height: 20px;
  cursor: pointer;

  a:hover {
    color: ${theme.palette.primary.main};
  }
  .active {
    color: ${theme.palette.primary.main};
  }
`;
