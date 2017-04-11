import React, { Component,cloneElement,createClass} from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BrowserRouter,Route, Redirect} from 'react-router-dom';
import StudentDetailsPage from './student-details-page';
import InstructorDetailsPage from './instructor-details-page';
import feathers,{rest} from 'feathers-client';
import HomePage from './home-page';
import timeTable from './home-page';
import StudentTimeTable from './student-time-table';
import InstructorTimeTable from './instructor-time-table';
//import rest from 'feathers-rest';
// Needed for onTouchTap
import superagent from 'superagent';
injectTapEventPlugin();

console.log("app");


class App extends Component {
  constructor(props){
    super(props);
    this.app = feathers().configure(rest("http://192.168.43.84:3000").superagent(superagent));
  }
  render() {
    let StudentDetailsPageWrapper = (props) => <StudentDetailsPage app={this.app}/>;
    let InstructorDetailsPageWrapper = (props) => <InstructorDetailsPage app={this.app}/>;
    let StudentTimeTableWrapper = (props) => <StudentTimeTable app={this.app}/>;
    let InstructorTimeTableWrapper = (props) => <InstructorTimeTable app={this.app}/>;

    return (
      <BrowserRouter>
        <div>
        <Route path="/students" component={StudentDetailsPageWrapper}/>
        <Route path="/student-classes" component={StudentTimeTableWrapper}/>
        <Route path="/instructor-classes" component={InstructorTimeTableWrapper}/>
        <Route path="/classes" component={StudentTimeTableWrapper}/>
        <Route path="/instructors" component={InstructorDetailsPageWrapper}/>
          <Route exact path="/" component={HomePage}/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
