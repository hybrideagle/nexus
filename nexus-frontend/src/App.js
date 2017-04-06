import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import DockedDrawer from './docked-drawer';
import StudentDetails from './student-details';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import StudentDetailsPage from './student-details-page'
// Needed for onTouchTap

injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/student" component = {StudentDetailsPage} />
      </BrowserRouter>
    );
  }
}

export default App;
