// var heading = React.createElement('h1', null, 'Help Queue');
// var ticketHeading = React.createElement('h3', null, '3a');
// var ticketNames = React.createElement('h3', null, 'Thato and Haley');
// var ticketIssue = React.createElement('h3', null, 'Firebase wont save record');
// var app = React.createElement('div', null, heading, ticketHeading, ticketIssue, ticketNames);

// ReactDOM.render(
//     app,
//     document.getElementById('react-app-root')
// )

//vs 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
