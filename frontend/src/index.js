import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import {getAllPosts,getAllCategories} from './actions'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(ReduxThunk)
  )
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch(getAllPosts())
store.dispatch(getAllCategories())


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>

      <BrowserRouter><App /></BrowserRouter>
    </MuiThemeProvider>

  </Provider>, document.getElementById('root')
);
registerServiceWorker();
