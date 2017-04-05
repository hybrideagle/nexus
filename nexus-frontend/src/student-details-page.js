import StudentDetails from './student-details'
import React, { Component } from 'react';

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


export default () => (<StudentDetails studentData={temp_data} />);
