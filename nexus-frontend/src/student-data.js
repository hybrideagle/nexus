import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DockedDrawer from './docked-drawer'
// Needed for onTouchTap

injectTapEventPlugin();


let Student = (props) => {
  return (<Card>
            <DockedDrawer />
            <CardText>
              <div>Name:{props.data.name}</div>
              <div>Age:{props.data.age}</div>
            </CardText>
        </Card>);
};

let temp_data = {name:"Blargh",age:15};

class StudentDetails extends Component {
  render() {
    return (<div>{this.props.data.name}</div>);
  }
}

export default StudentDetails;
