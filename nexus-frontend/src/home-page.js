import StudentDetails from './student-details'
import React, { Component } from 'react';
import TopBar from './top-bar';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './left-nav'

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

let StudentCard = () =>
(<MuiThemeProvider>
  <div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Students</h1>
    </Paper>
  </div>
</MuiThemeProvider>);

export default () => (
  <MuiThemeProvider>
  <div>
    <div style={{marginLeft:"200px"}} >
    <TopBar />
    </div>
    <LeftNav width="200px" open={false}/>
    <div style={{marginLeft:"250px"}}>
      <StudentCard />
      <StudentDetails studentData={temp_data}/>
    </div>
  </div>
  </MuiThemeProvider>
);
