
export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'
export const LIST_YEARS = 'LIST_YEARS'
export const FILTER_LIST = 'FILTER_LIST'

function requestApps() {
  return {
    type: REQUEST_APPS
  }
}

function receiveApps(json) {
  return {
    type: RECEIVE_APPS,
    apps: json
  }
}
function fetchYears(years) {
  return {
    type: LIST_YEARS,
    years
  }
}
function fetchFilterState(filters) {
  return {
    type: FILTER_LIST,
    filters
  }
}

function fetchApps() {
  return dispatch => {
    dispatch(requestApps())
    return fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
      .then(response => response.json())
      .then(json => {
        return dispatch(receiveApps(json))})
  }
}

function shouldFetchApps(state) {
  const apps = state.apps
  if (apps.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchAppsIfNeeded(args) {
  return (dispatch, getState) => {
    // if (shouldFetchApps(getState())) {
      return dispatch(fetchApps(args))
    // }
  }
}

export function getYears() {
  return (dispatch, getState) => {
    const currentYear = new Date().getFullYear() + 1;
    let years = [];
    for(let i = 2006; i< currentYear; i++) {
      years.push(i);
    }
    return dispatch(fetchYears(years))
  }
}

export function fetchFilter(filter) {
  let query = Object.keys(filter)
  .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(filter[k]))
  .join('&');

  let url = 'https://api.spacexdata.com/v3/launches?limit=100&' + query;

  return dispatch => {
    console.log('new URLSearchParams(filter)', url)
    dispatch(requestApps())
    return fetch(`${url}`)
      .then(response => response.json())
      .then(json => {
        return dispatch(receiveApps(json))})
  }
}
