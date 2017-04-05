import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import DockedDrawer from './docked-drawer';
import StudentDetails from './student-details';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap

injectTapEventPlugin();

let temp_data = {
  data:[{
    name:"asd",
    age:"asasd"
  },{
    name:"asd",
    age:"asasd"
  },{
    name:"asd",
    age:"asasd"
  }]};



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <StudentDetails studentData={temp_data}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
