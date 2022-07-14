import DraftsIcon from '@mui/icons-material/Drafts';
import HardwareIcon from '@mui/icons-material/Hardware';
import StorageIcon from '@mui/icons-material/Storage';
import HeadsetIcon from '@mui/icons-material/Headset';
import ChairIcon from '@mui/icons-material/Chair';
import MemoryIcon from '@mui/icons-material/Memory';
import MonitorIcon from '@mui/icons-material/Monitor';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { capitalize, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import List from '@mui/material/List';
import { FormEvent, useState } from "react";
import { theme } from '../../../app.styled';
import { ICategory } from '../../../interfaces/Product';
import { StyledListItemButton } from "./listCategories.styled";
import { useNavigate } from 'react-router-dom';

interface Props {
  categories: ICategory[];
}

const ListCategories = ({ categories }: Props) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e);
  }

  function renderItems() {

    return (
      <>
        {categories.map((category) => (
          <StyledListItemButton onClick={onClick}>
            <ListItemIcon>
              {category.name.includes("hardware") && (<HardwareIcon />)}
              {category.name.includes("armazenamento") && (<StorageIcon />)}
              {category.name.includes("perife") && (<KeyboardIcon />)}
              {category.name.includes("eletro") && (<PrecisionManufacturingIcon />)}
              {category.name.includes("moveis") && (<TableRestaurantIcon />)}
              {category.name.includes("headset") && (<HeadsetIcon />)}
              {category.name.includes("cadeira") && (<ChairIcon />)}
              {category.name.includes("proces") && (<MemoryIcon />)}
              {category.name.includes("monit") && (<MonitorIcon />)}
            </ListItemIcon>
            <ListItemText primary={capitalize(category.name.toString())} />
          </StyledListItemButton>
        ))}
      </>
    )
  }

  return (
    <List
      sx={{ width: "100%", maxWidth: "360px", bgcolor: "backgroud.paper" }}
      component="div"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nasted-list-subheader"
          sx={{
            backgroundColor: `${theme.palette.background.default}`,
            fontSize: "1.15em",
            fontWeight: 520,
          }}>
          Categorias
        </ListSubheader>
      }
    >
      {renderItems()}
    </List>
  )
}

export default ListCategories