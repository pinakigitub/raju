import React from "react";
import { Grid, TextField, Button, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import { FilterCriteria } from "./FilterCriteria";

const useStyles = makeStyles({
  root: {
    padding: "2px 10px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

export const SearchBar = (props) => {
  const { setDateRange } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentFilterName, setCurrentFilterName] = React.useState("Test");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closePopover = (name) => {
    setAnchorEl(null);

    setCurrentFilterName(name);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid container className={classes.display}>
      <Grid item xs={12}>
        <Paper component="form" className={classes.root} fullWidth="true">
          <InputBase
            className={classes.input}
            placeholder="enter search here..."
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="split button"
            className={classes.searchBar}
          >
            <Button>{currentFilterName}</Button>
            <Button
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleClick}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>

          <Popover
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              <FilterCriteria
                setDateRange={setDateRange}
                closePopover={closePopover}
              ></FilterCriteria>
            </Typography>
          </Popover>
        </Paper>
      </Grid>
    </Grid>
  );
};
