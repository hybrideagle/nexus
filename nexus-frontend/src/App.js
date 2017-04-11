import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import DockedDrawer from './docked-drawer';
import StudentDetails from './student-details';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import StudentDetailsPage from './student-details-page';
import feathers from 'feathers-client';
import HomePage from './home-page';
import io from "socket.io"
// Needed for onTouchTap

injectTapEventPlugin();

var app = feathers();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/students" component={StudentDetailsPage} client={feathers} app={app}/>
          <Route path="/instructors" component={StudentDetailsPage} client={feathers} app={app}/>
          <Route path="/" match={"exact"} component={HomePage} client={feathers} app={app}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
