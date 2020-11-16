import React from "react";
import { withRouter } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "./Menu";

const Header = () => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu">
        <Menu />
      </IconButton>
      <Typography variant="h6" color="inherit">
        Healthcare Anywhere Analytics
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withRouter(Header);
