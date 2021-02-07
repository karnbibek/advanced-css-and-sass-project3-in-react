import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './components/reducers';

import './components/sass/index.scss';
import App from './App';
// import BasePage from './components/BasePage';
import BasePageUsingHooks from './components/BasePageUsingHooks';
import Profile from './components/Profile';
import CompanyList from "./components/companyList/CompanyList";

// const store = createStore(reducers);

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <App>
        {/* <Route path='/' exact component={BasePage} /> */}
        <Route path='/' exact component={BasePageUsingHooks} />
        <Route path='/profile' component={Profile} />
        <Route path='/companies' component={CompanyList} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);