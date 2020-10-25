import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import configureStore from './redux/configureStore'
import App from './components/app'
import theme from './theme'

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state)
const jssStyles = document.querySelector('#jss-server-side');
/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store} >
        <App />
      </Provider>
    </ThemeProvider>
  );
}

hydrate(<Main />, document.querySelector('#app'));

// hydrate(
//   <Provider store={store} >
//     <CssBaseline>
//      <App />
//     </CssBaseline>
//   </Provider>,
//   document.querySelector('#app')
// )
