import { ListItemButton, ListItemIcon } from '@mui/material';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import { theme } from '../../../app.styled';

export const StyledList = styled(List)``;

export const StyledListItemButton = styled(ListItemButton)`
  background-color: ${theme.palette.background.default};
  &:hover {
    color: ${theme.palette.primary.main};
    svg {
      color: ${theme.palette.primary.main};
    }
  }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  &:hover {
    color: ${theme.palette.primary.main};
  }
`;
