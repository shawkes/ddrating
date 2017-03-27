import React from 'react';
import { mount } from 'react-mounter';
import App from '../imports/ui/App.jsx';
import Rater from '../imports/ui/Rater.jsx';
import Dashboard from '../imports/ui/Dashboard.jsx';

FlowRouter.route('/', {
  action() {
    mount(App, { content: <Rater /> });
  }
});

FlowRouter.route('/dashboard', {
  action() {
    mount(App, { content: <Dashboard /> });
  }
});
