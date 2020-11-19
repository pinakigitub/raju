import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import DashboardContext from "../context/DashboardContext";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import "../components/FilterCriteria.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const FilterCriteria = (props) => {
  const { setStartAndEndDate, handleGranularity } = useContext(
    DashboardContext
  );
  const { closePopover } = props;

  const classes = useStyles();
  const [startDate, setStartDate] = React.useState(new Date("2015-01-01"));
  const [endDate, setEndDate] = React.useState(new Date("2024-12-31"));
  const presetsItems = [
    {
      value: {
        startDate: moment()._d.toLocaleDateString(),
        endDate: moment()._d.toLocaleDateString(),
      },
      text: "Today",
      granularity: "day",
    },
    {
      value: {
        startDate: moment(moment().subtract(6, "days"))._d.toLocaleDateString(),
        endDate: moment()._d.toLocaleDateString(),
      },
      text: "Week to Date",
      granularity: "day",
    },

    {
      value: {
        startDate: moment(moment().year() + "-01-01")._d.toLocaleDateString(),
        endDate: moment()._d.toLocaleDateString(),
      },
      text: "Year to Date",
      granularity: "month",
    },
    {
      value: {
        startDate: moment(
          moment()
            .subtract(1, "years")
            .year() + "-01-01"
        )._d.toLocaleDateString(),
        endDate: moment(
          moment()
            .subtract(1, "years")
            .year() + "-12-31"
        )._d.toLocaleDateString(),
      },
      text: "PreviousYear",
      granularity: "month",
    },
    {
      value: {
        startDate: moment(
          moment()
            .subtract(4, "years")
            .year() + "-01-01"
        )._d.toLocaleDateString(),
        endDate: moment(moment().year() + "-12-31")._d.toLocaleDateString(),
      },
      text: "Last Five Years",
      granularity: "year",
    },
  ];

  const listItems = presetsItems.map((item, index) => (
    <li>
      <Link href="#" onClick={(e) => getGraph(e, item)}>
        {item.text}
      </Link>
    </li>
  ));

  const getGraph = async (e, obj) => {
    setStartAndEndDate(obj.value.startDate, obj.value.endDate);
    handleGranularity(obj.granularity);
    closePopover(obj.text);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const setDateRangeInDashBoard = () => {
    setStartAndEndDate(startDate, endDate);
    closePopover("Custom Date");
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Presets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{listItems}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>DateRange</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Start Date"
                value={startDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />

              <KeyboardDatePicker
                autoOk
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="End Date"
                value={endDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />

              <Button
                style={{ margin: "27px" }}
                variant="contained"
                color="primary"
                onClick={setDateRangeInDashBoard}
              >
                Apply
              </Button>
            </MuiPickersUtilsProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
