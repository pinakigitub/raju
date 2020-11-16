import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";
const DashboardItems = [
  {
    id: 0,
    name: "Total Surveys with Rating < 7",
    vizState: {
      query: {
        measures: ["Surveys.count"],
        timeDimensions: [],
        segments: ["Surveys.belowParRating"],
        order: {},
        filters: [],
      },
      chartType: "number",
    },
  },
  {
    id: 0,
    name: "Total Surveys with Video Concerns",
    vizState: {
      query: {
        measures: ["Surveys.count"],
        timeDimensions: [],
        segments: ["Surveys.videoConcerns"],
        order: {},
        filters: [],
      },
      chartType: "number",
    },
  },
  {
    id: 0,
    name: "Total Surveys with Audio Concerns",
    vizState: {
      query: {
        measures: ["Surveys.count"],
        timeDimensions: [],
        segments: ["Surveys.audioConcerns"],
        order: {},
        filters: [],
      },
      chartType: "number",
    },
  },
  {
    id: 0,
    name: "Total Surveys with Ease of Use Concerns",
    vizState: {
      query: {
        measures: ["Surveys.count"],
        timeDimensions: [],
        segments: ["Surveys.easeofuseConcerns"],
        order: {},
        filters: [],
      },
      chartType: "number",
    },
  },
  {
    id: 1,
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
    id: 1,
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
    id: 2,
    name: "Video Concerns",
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
      },
      chartType: "line",
    },
  },
  {
    id: 2,
    name: "Audio Concerns",
    vizState: {
      query: {
        measures: ["Surveys.count"],
        timeDimensions: [
          {
            dimension: "Surveys.appointmentDateTime",
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
];

const SurveyDashboardPage = () => {
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
    <Dashboard>{DashboardItems.map(dashboardItem)}</Dashboard>
  ) : (
    <Empty />
  );
};

export default SurveyDashboardPage;
