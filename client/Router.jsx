import React from 'react';
import App from '../imports/ui/App.jsx';
import Rater from '../imports/ui/Rater.jsx';
import Dashboard from '../imports/ui/Dashboard.jsx';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, { content: <Rater /> });
  }
});

FlowRouter.route('/dashboard', {
  action() {
    ReactLayout.render(App, { content: <Dashboard /> });
  }
});
