import { REQUEST_APPS,  RECEIVE_APPS, LIST_YEARS, FILTER_LIST } from './actions';

function apps( state = {isFetching: false, apps: [], years: [], filters:{}}, action) {
  switch (action.type) {
    case REQUEST_APPS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_APPS:
      return Object.assign({}, state, {
        isFetching: false,
        apps: action.apps
      });
    case LIST_YEARS:
      return Object.assign({}, state, {
        isFetching: false,
        years: action.years
      });
    case FILTER_LIST:
      return Object.assign({}, state, {
        isFetching: false,
        filters: action.filters
      });
    default:
      return state
  }
}

export default apps
