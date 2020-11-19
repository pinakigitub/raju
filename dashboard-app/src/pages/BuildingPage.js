import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { SearchBar } from "../components/SearchBar";

const BuildingPage = () => {
  const Empty = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        height: 500,
      }}
    >
      <Typography variant="h5" color="inherit">
        There are no charts on this dashboard. Use Playground Build to add one.
      </Typography>
    </div>
  );

  return (
    <div>
      <SearchBar />
      <Empty />
    </div>
  );
};

export default BuildingPage;
