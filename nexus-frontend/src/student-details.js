import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DockedDrawer from './docked-drawer'
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

let Student = (props) => {
  return (
  <div>
        <Card>
            <CardText>
              <div style={{display:"inline-block"}}>
              <Avatar />
              </div>
              <div style={{display:"inline-block","marginLeft":"5%"}}>
              <div>Name:{props.data.name}</div>
              <div>Age:{props.data.age}</div>
              </div>
            </CardText>
        </Card>
  </div>
    );
};

let temp_data = {name:"Blargh",age:15};

class StudentDetails extends Component {
  render() {
    let cards = this.props.studentData.data.map(data => <Student data={data}/>);
    return (<div>
              <Paper zDepth={2}>
                <DockedDrawer />
                  {cards}
              </Paper>
            </div>);
  }
}

export default StudentDetails;
