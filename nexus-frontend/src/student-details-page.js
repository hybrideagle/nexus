import StudentDetails from './student-details'
import React, { Component } from 'react';
import TopBar from './top-bar';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

let StudentCard = () => <MuiThemeProvider><div style={{width:"50%",margin:"0 auto",textAlign:"center"}}><Paper zDepth={4}><h1>Students</h1></Paper></div></MuiThemeProvider>;

export default () => (<div><TopBar /><StudentCard /><StudentDetails studentData={temp_data} /></div>);
