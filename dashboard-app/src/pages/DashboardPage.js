import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import { FilterCriteria } from "../components/FilterCriteria";
import DashboardItem from "../components/DashboardItem";

const DashboardPage = () => {
  const [startDate, setStartDate] = useState("2010-01-01");
  const [endDate, setEnddate] = useState("2027-12-31");

  const setStartAndEndDate = async (start, end) => {
    setStartDate(start);
    setEnddate(end);
  };

  const DashboardItems = [
    {
      id: -1,
      name: "Survey Rating < 4",
      vizState: {
        query: {
          measures: ["Surveys.count"],
          timeDimensions: [
            {
              dimension: "Surveys.appointmentDateTime",
              dateRange: [startDate, endDate],
            },
          ],
          segments: ["Surveys.belowParRating"],
          order: {},
          filters: [],
        },
        chartType: "number",
      },
    },
    {
      id: 0,
      name: "Video Concerns",
      vizState: {
        query: {
          measures: ["Surveys.count"],
          timeDimensions: [
            {
              dimension: "Surveys.appointmentDateTime",
              granularity: "year",
              dateRange: [startDate, endDate],
            },
          ],
          segments: ["Surveys.videoConcerns"],
          dimensions: ["Surveys.userRole"],
          order: {
            "Surveys.count": "desc",
          },
        },
        chartType: "line",
      },
    },
    {
      id: 1,
      name: "Audio Concerns",
      vizState: {
        query: {
          measures: ["Surveys.count"],
          timeDimensions: [
            {
              dimension: "Surveys.appointmentDateTime",
              dateRange: [startDate, endDate],
              granularity: "day",
            },
          ],
          segments: ["Surveys.audioConcerns"],
          dimensions: ["Surveys.userRole"],
          order: {},
          filters: [],
        },
        chartType: "line",
      },
    },
    {
      id: 2,
      name: "Ease of Use Concerns",
      vizState: {
        query: {
          measures: ["Surveys.count"],
          timeDimensions: [
            {
              dimension: "Surveys.appointmentDateTime",
              granularity: "day",
            },
          ],
          segments: ["Surveys.easeofuseConcerns"],
          dimensions: ["Surveys.userRole"],
          order: {},
          filters: [],
        },
        chartType: "line",
      },
    },
    {
      id: 3,
      name: "Provider Survey Ratings",
      vizState: {
        query: {
          measures: ["Surveys.count"],
          timeDimensions: [
            {
              dimension: "Surveys.appointmentDateTime",
              granularity: "day",
            },
          ],
          dimensions: ["Surveys.rating"],
          segments: ["Surveys.providerRole"],
          order: {},
          filters: [],
        },
        chartType: "line",
      },
    },
    {
      id: 4,
      name: "Member Survey Ratings",
      vizState: {
        query: {
          measures: ["Surveys.count"],
          timeDimensions: [
            {
              dimension: "Surveys.appointmentDateTime",
              granularity: "day",
            },
          ],
          dimensions: ["Surveys.rating"],
          segments: ["Surveys.memberRole"],
          order: {},
          filters: [],
        },
        chartType: "line",
      },
    },
    {
      id: 5,
      name: "Provider with Rating < 4 OR Audio/Video Concerns - Browser Types",
      vizState: {
        query: {
          measures: ["Surveys.count"],
          timeDimensions: [
            {
              dimension: "Surveys.appointmentDateTime",
              granularity: "day",
            },
          ],
          segments: [
            "Surveys.providerRole",
            "Surveys.videoConcerns",
            "Surveys.audioConcerns",
            "Surveys.belowParRating",
          ],
          dimensions: ["Surveys.browser"],
          order: {
            "Surveys.count": "desc",
          },
          filters: [],
        },
        chartType: "line",
      },
    },
    {
      id: 6,
      name: "Provider with Rating < 4 OR Audio/Video Concerns - Browser Types",
      vizState: {
        query: {
          measures: ["Surveys.count"],
          timeDimensions: [
            {
              dimension: "Surveys.appointmentDateTime",
              granularity: "day",
            },
          ],
          segments: [
            "Surveys.memberRole",
            "Surveys.videoConcerns",
            "Surveys.audioConcerns",
            "Surveys.belowParRating",
          ],
          dimensions: ["Surveys.browser"],
          order: {},
          filters: [],
        },
        chartType: "line",
      },
    },
    {
      id: 8,
      name: "New Chart",
      vizState: {
        query: {
          measures: ["Surveys.count"],
          timeDimensions: [
            {
              dimension: "Surveys.appointmentDateTime",
            },
          ],
          dimensions: ["Surveys.browser", "Surveys.userRole"],
          filters: [
            {
              dimension: "Surveys.audioConcern",
              operator: "equals",
              values: ["0"],
            },
          ],
          order: {
            "Surveys.count": "desc",
          },
        },
        chartType: "table",
      },
    },
    {
      id: 9,
      name: "New Chart",
      vizState: {
        query: {
          measures: ["Surveys.count"],
          timeDimensions: [
            {
              dimension: "Surveys.appointmentDateTime",
              granularity: "day",
            },
          ],
          segments: ["Surveys.videoConcerns"],
          dimensions: ["Surveys.userRole"],
          order: {
            "Surveys.count": "desc",
          },
          filters: [],
        },
        chartType: "line",
      },
    },
  ];
  const dashboardItem = (item) => (
    <Grid item xs={12} lg={6} key={item.id}>
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Grid>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: "center",
        padding: 12,
      }}
    >
      <Typography variant="h5" color="inherit">
        There are no charts on this dashboard. Use Playground Build to add one.
      </Typography>
    </div>
  );

  return DashboardItems.length ? (
    <>
      <FilterCriteria setDateRange={setStartAndEndDate}></FilterCriteria>
      <Dashboard>{DashboardItems.map(dashboardItem)}</Dashboard>
    </>
  ) : (
    <Empty />
  );
};

export default DashboardPage;
