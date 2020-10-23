import React from "react";

import SearchBox from "./../components/SearchBox";

import Grid from "@material-ui/core/Grid";

const Blank = () => {
  return (
    <Grid container spacing={3}>
      <SearchBox />
    </Grid>
  );
};

export default Blank;
