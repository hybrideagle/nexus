import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DockedDrawer from './docked-drawer'


let Event = (props) => {
  return (<Card>
            <DockedDrawer />
            <CardText>
              <div>Name:{props.data.name}</div>
              <div>Time:{props.data.time}</div>
              <div>Date:{props.data.date}</div>

              <div>Location:{props.data.location}</div>
            </CardText>
        </Card>);
};

export default ({data}) => {
  let events = data.map((a)=><Event data={a} key={a.id}/>);
  return (
    <div>
      {events}
    </div>
  );
}
