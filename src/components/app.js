import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Typography } from "@material-ui/core";
import { fetchAppsIfNeeded, getYears, fetchFilter } from '../redux/actions'
import Filter from '../components/filter';

import Card from './card'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {}
    }
    this.getFilter = this.getFilter.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded());
    dispatch(getYears());
  }

  getFilter(e) {
    const { dispatch } = this.props
    const {filter} = this.state;
    const obj = Object.keys(filter).length > 0 ? {...filter} : {};
    obj[e.target.id] = e.currentTarget.textContent;
    this.setState({ filter: {...obj} })
    dispatch(fetchFilter(obj));
  }


  render() {
    const { isFetching, apps, years } = this.props
    const totalapps = apps.length;
    return (
       <Grid className="app-wrapper" item xs={12} container direction='row' >
        <Grid item xs={12}>
          <Typography component="h2">
            <b>Space X launch Programs</b>
          </Typography>
        </Grid>
        <Grid className="app-wrapper" item xs={12} container direction='row'>
          <Grid item xs={12} md={3}>
            <Filter years={years} getFilter={this.getFilter} />
          </Grid>
          {isFetching && totalapps === 0 && <h2>Loading...</h2>}
          {!isFetching && totalapps === 0 && <h2>Empty.</h2>}
          <Grid item xs={12} md={9} container direction='row'>
            <Card apps={apps} totalapps={totalapps} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
 
function mapStateToProps({ isFetching, apps, years, filters }) {
  return {
    isFetching,
    apps,
    years,
    filters
  }
}
 
export default connect(mapStateToProps)(App)
