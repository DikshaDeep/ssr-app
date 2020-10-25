import React from 'react';
import {Grid} from "@material-ui/core";

const CardLeft = ({ img }) => (
  <Grid className="col-left" container direction="row" justify='center' alignItems= "center">
    <img className="app-icon" src={img} alt={img} height="150" width="120" />
  </Grid>
)

export default CardLeft;
