import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'
import theme from './theme'


module.exports = function render(initialState) {
  const sheets = new ServerStyleSheets();
  // Configure the store with the initial state provided
  const store = configureStore(initialState)

  // render the App store static markup ins content variable
  let content = renderToString(
    <ThemeProvider theme={theme}>

    <Provider store={store} >
       <App />
    </Provider>
    </ThemeProvider>
  );

  // Get a copy of store data to create the same store on client side 
  const preloadedState = store.getState()

  return {content, preloadedState};
}
