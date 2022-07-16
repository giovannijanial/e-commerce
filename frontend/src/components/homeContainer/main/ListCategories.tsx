import CategoryIcon from '@mui/icons-material/Category';
import ChairIcon from '@mui/icons-material/Chair';
import HardwareIcon from '@mui/icons-material/Hardware';
import HeadsetIcon from '@mui/icons-material/Headset';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MemoryIcon from '@mui/icons-material/Memory';
import MonitorIcon from '@mui/icons-material/Monitor';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import StorageIcon from '@mui/icons-material/Storage';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import { capitalize, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import { theme } from '../../../app.styled';
import { ICategory } from '../../../interfaces/Product';
import { StyledListItemButton } from "./listCategories.styled";

interface Props {
  categories: ICategory[];
}

const ListCategories = ({ categories }: Props) => {

  function renderItems() {

    return (
      <>
        {categories.map((category) => (
          <Link key={category.id} to={`/products/category/${category.name.toString()}`}>
            <StyledListItemButton>
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
          </Link>
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
      <Link to={`/products`}>
        <StyledListItemButton>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary={"Todos"} />
        </StyledListItemButton>
      </Link>
      {renderItems()}
    </List>
  )
}

export default ListCategories