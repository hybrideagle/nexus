import React, { Component,cloneElement,createClass} from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter,Route, Redirect} from 'react-router-dom';
import StudentDetailsPage from './student-details-page';
import InstructorDetailsPage from './instructor-details-page';
import DepartmentDetailsPage from './department-details-page'
import feathers,{rest} from 'feathers-client';
import HomePage from './home-page';
import TopBar from './top-bar';
import LeftNav from './left-nav';
import StudentTimeTable from './student-time-table';
import InstructorTimeTable from './instructor-time-table';
//import rest from 'feathers-rest';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import superagent from 'superagent';

import conn_string from './config'

// Needed for onTouchTap
injectTapEventPlugin();

console.log("app");

class App extends Component {
  constructor(props){
    super(props);
    this.app = feathers().configure(rest(conn_string).superagent(superagent));
  }
  render() {
    console.log(this.props.match);
    let StudentDetailsPageWrapper = (props) => <StudentDetailsPage app={this.app}/>;
    let InstructorDetailsPageWrapper = (props) => <InstructorDetailsPage app={this.app}/>;
    let StudentTimeTableWrapper = (props) => <StudentTimeTable app={this.app} id={props.match.params.id}/>;
    let InstructorTimeTableWrapper = (props) => <InstructorTimeTable app={this.app} id={props.match.params.id}/>;
    let DepartmentDetailsPageWrapper = (props) => <DepartmentDetailsPage app={this.app} id={props.match.params.id}/>;

    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div id="container">
            <div>
              <TopBar />
            </div>
            <LeftNav open={true}/>
              <div style={{width:"70%",marginLeft:"20%"}}>
                <Route exact path="/students" component={StudentDetailsPageWrapper}/>
                <Route path="/student_classes/:id" component={StudentTimeTableWrapper}/>
                <Route path="/instructor_classes/:id" component={InstructorTimeTableWrapper}/>
                <Route path="/classes" component={StudentTimeTableWrapper}/>
                <Route path="/instructors" component={InstructorDetailsPageWrapper}/>
                <Route path="/departments" component={DepartmentDetailsPageWrapper}/>
                <Route exact path="/" component={HomePage}/>
              </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
