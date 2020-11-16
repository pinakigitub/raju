import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem ><Link to="/newsurvey"/></MenuItem>
        <MenuItem onClick={handleClose}>Call Quality</MenuItem>
        <MenuItem onClick={handleClose}>Adhoc Meeting</MenuItem>
        <MenuItem onClick={handleClose}>Group Classes</MenuItem>
        <MenuItem onClick={handleClose}>Notifications</MenuItem>
        <MenuItem onClick={handleClose}>Meeting Triage</MenuItem>
      </Menu>
    </div>
  );
}
