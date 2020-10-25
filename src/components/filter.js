import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Filter = ({ years, getFilter, selected }) => {
  return (
    <Grid item xs={12} className="app-card">
      <Typography>Filters</Typography>
      <Grid className="filter-wrapper" item xs={12}>
        <Grid item xs={12} className="filter-title">
          <Typography justify="center" align="center">
            Launch Year
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="row" justify="space-between">
          {years?.map((year) => (
            <Grid
              container
              className="filter-container"
              item
              xs={4}
              justify={ (year%2) !== 0 ? "flex-end" : "flex-start"}
              key={year}
            >
              <Typography
                style={{ background: (year == selected.launch_year) ? '#70bd21b5' : '#8ec357b5'}}
                className="filter-grid"
                direction="row"
                justify="center"
                align="center"
                onClick={getFilter}
                id="launch_year"
              >
                {year}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid className="filter-wrapper" item xs={12}>
        <Grid item xs={12} className="filter-title">
          <Typography justify="center" align="center">
            Successful Launch
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="row" justify="space-between">
          <Grid
            container
            className="filter-container"
            item
            xs={4}
          >
            <Typography
              className="filter-grid"
              style={{ background: selected.launch_success === "true" ? '#70bd21b5' : '#8ec357b5'}}
              direction="row"
              justify="center"
              align="center"
              id="launch_success"
              onClick={getFilter}
            >
              {"true"}
            </Typography>
          </Grid>
          <Grid
            container
            className="filter-container"
            align="right"
            item
            xs={4}
          >
            <Typography
              className="filter-grid"
              style={{ background: selected.launch_success === 'false' ? '#70bd21b5' : '#8ec357b5'}}
              direction="row"
              justify="flex-end"
              align="center"
              id="launch_success"
              onClick={getFilter}
            >
              {"false"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="filter-wrapper" item xs={12}>
        <Grid item xs={12} className="filter-title">
          <Typography justify="center" align="center">
            Successful Landing
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="row" justify="space-between">
          <Grid
            container
            className="filter-container"
            item
            xs={3}
          >
            <Typography
              className="filter-grid"
              style={{ background: selected.land_success === "true" ? '#70bd21b5' : '#8ec357b5'}}
              direction="row"
              justify="center"
              align="center"
              id="land_success"
              onClick={getFilter}
            >
              {"true"}
            </Typography>
          </Grid>
          <Grid
            container
            className="filter-container"
            align="right"
            item
            xs={4}
          >
            <Typography
              className="filter-grid"
              direction="row"
              justify="flex-end"
              id="land_success"
              style={{ background: selected.land_success === 'false' ? '#70bd21b5' : '#8ec357b5'}}
              onClick={getFilter}
            >
              {"false"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Filter;
