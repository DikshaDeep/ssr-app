import React from "react";
import { Grid, Typography } from "@material-ui/core";

const CardRight = ({ app }) => (
  <Grid className="col-right">
    <Typography className="app-no" component="h3"><b>{app?.mission_name}</b></Typography>
    <Grid>
      <Grid container direction="row" alignItems="center">
        <Typography component="h4"><b>Mission Ids:</b></Typography>
        {app?.mission_id?.map((id, i) => (
          <li className="app-no" key={i}>{id}</li>
        ))}
      </Grid>
      <Grid container direction="row"  alignItems="center">
        <Typography component="h4"><b>Launch Year:</b></Typography>
        <span className="app-no">{app?.launch_year}</span>
      </Grid>
      <Grid container direction="row"  alignItems="center">
        <Typography component="h4"><b>Successful Launch:</b></Typography>
        <span className="app-no"> 
          {JSON.stringify(app?.launch_success)}
        </span>
      </Grid>
      <Grid container direction="row" alignItems="center">
        <Typography component="h4"><b>Successful Landing:</b></Typography>
        <span className="app-no">{JSON.stringify(app?.launch_landing)}</span>
      </Grid>
    </Grid>
  </Grid>
);

export default CardRight;
