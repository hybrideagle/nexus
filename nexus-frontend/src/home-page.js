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
(  <div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Students</h1>
    </Paper>
  </div>
);

export default () => (
  <MuiThemeProvider>
    <div style={{marginLeft:"20%",width:'75%'}}>
      <div>
      <TopBar />
      </div>
      <LeftNav width="20%" open={true}/>
      <div>
        <StudentCard />
        <StudentDetails studentData={temp_data}/>
      </div>
    </div>
  </MuiThemeProvider>
);
