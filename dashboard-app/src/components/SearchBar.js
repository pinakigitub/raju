import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { FilterCriteria } from "./FilterCriteria";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
  root1: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const SearchBar = (props) => {
  const { setDateRange } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="topnav">
      <h3>Search </h3>
      <div class="search-container">
        <input type="text" placeholder="Enter search here ..." name="search" />

        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              {/* <button
                className="searchButton "
                type="submit"
                {...bindTrigger(popupState)}
              >
                Open Popover
              </button> */}
              <input
                type="text"
                name="check"
                placeholder="Last value"
                {...bindTrigger(popupState)}
              />
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box p={2}>
                  <Typography>
                    The content of the Popover.
                    <FilterCriteria
                      setDateRange={setDateRange}
                    ></FilterCriteria>
                  </Typography>
                </Box>
              </Popover>
            </div>
          )}
        </PopupState>
        <button className="searchButton btnColor" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};
