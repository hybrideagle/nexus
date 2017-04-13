import React from 'react'
import './App.css'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router-dom'

let Student = (props) => {
  return (<Card>
              <CardHeader
                actAsExpander={true}
                showExpandableButton={true}
              />
            <CardText style={{textAlign:'center'}}>
              <div style={{display:"inline-block"}}>
                <div>Name:{props.data.name}</div>
                <div>Section:{props.data.sec_id}</div>
              </div>
              <div style={{width:"10%",display:"inline-block"}} />
              <div style={{display:"inline-block"}}>
              <CardActions>
                <Link to={"/student-classes/"+props.data.id}>
                  <FlatButton label={"Show timetable"} primary={true} style={{bgColor:"black"}}/>
                </Link>
                <FlatButton label={"Delete Entry"} secondary={true} style={{bgColor:"black"}}/>

                </CardActions>
              </div>
            </CardText>
            <CardText style={{textAlign:"center"}} expandable={true}>
              <div style={{display:"inline-block"}}>
                <div>Date of admission:{props.data.doa}</div>
                <div>Date of birth:{props.data.doa}</div>
                <div>Gender:{props.data.gender}</div>
                <div>Department:{props.data.dep_id}</div>
              </div>
            </CardText>
        </Card>);
};

export default (props) => {
    console.log(props.data);
    let cards = props.data.map(a => <Student data={a} key={a.id}/> );
    return (
      <div>
        {cards}
      </div>
    );
  }
