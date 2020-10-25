import React from 'react';
import {Grid} from "@material-ui/core";
import CardTop from './card-top';
import CardBottom from './card-bottom';

const Card = ({ apps, totalapps }) => {
  
  const cards = apps.map((app, index) => (
    <Grid className="app-card" item xs={12} md={3} key={index}>
      <CardTop img={app?.links?.mission_patch} />
      <CardBottom app={app}/>
    </Grid>
  ))

  return cards
}


export default Card;
