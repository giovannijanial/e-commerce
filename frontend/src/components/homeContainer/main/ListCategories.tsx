import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { StyledList, StyledListItemButton, StyledSubHeader } from "./listCategories.styled"
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState } from "react";

const ListCategories = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: "360px", bgcolor: "backgroud.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <StyledSubHeader component="div" id="nasted-list-subheader">
          Categorias
        </StyledSubHeader>
      }
    >
      <StyledListItemButton>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </StyledListItemButton>
      <StyledListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </StyledListItemButton>
      <StyledListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </StyledListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <StyledListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </StyledListItemButton>
        </List>
      </Collapse>
      <StyledListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </StyledListItemButton>
      <StyledListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </StyledListItemButton>
      <StyledListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </StyledListItemButton>
      <StyledListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </StyledListItemButton>
    </List>
  )
}

export default ListCategories