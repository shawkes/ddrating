import React from 'react';
import App from '../imports/ui/App.jsx';
import Rater from '../imports/ui/Rater.jsx';
import Dashboard from '../imports/ui/Dashboard.jsx';
import { mount } from 'react-mounter';

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
