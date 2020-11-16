import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter as Router, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SurveyDashboardPage from './pages/SurveyDashboardPage';
import App from './App';

ReactDOM.render(
  <Router>
    <App>
      <Route key="index" exact path="/" component={DashboardPage} />
      <Route key="index" exact path="/survey" component={SurveyDashboardPage} />
      <Route key="index" exact path="/newsurvey" component={SurveyDashboardPage} />
    </App>
  </Router>, // eslint-disable-next-line no-undef
  document.getElementById('root')
);
