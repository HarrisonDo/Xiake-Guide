import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LayoutDemo from './routes/LayoutDemo';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/layout" component={LayoutDemo} />
    </Router>
  );
}

export default RouterConfig;
