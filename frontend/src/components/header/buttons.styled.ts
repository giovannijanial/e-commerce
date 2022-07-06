import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../../app.styled';

export const SyledBox = styled(Box)`
  width: 100px;
  display: flex;
  justify-content: space-around;
`;

export const StyledIconButon = styled(IconButton)`
  ${({ id }) =>
    id === 'admin'
      ? `
			color: ${theme.palette.background.paper};
    	&:hover {
				color: ${theme.palette.secondary.light};
			}
  	`
      : `&:hover {
				color: ${theme.palette.primary.main};
		}`}
`;
