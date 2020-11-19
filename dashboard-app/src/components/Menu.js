import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "#3f51b5",
  },
});

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Link to="/newsurvey" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/buildingpage" className={classes.link}>
            Call Quality
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/buildingpage" className={classes.link}>
            Adhoc Meeting
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/buildingpage" className={classes.link}>
            Group Classes
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/buildingpage" className={classes.link}>
            Notifications
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/buildingpage" className={classes.link}>
            Meeting Triage
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
