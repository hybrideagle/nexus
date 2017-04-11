import TimeTable from './time-table'
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './left-nav'
let temp_data = {
    id:1,
    name:"asd",
    age:"asasd"
  };

let TimeCard = (props) =>
(  <div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Time table for student:{props.id}</h1>
    </Paper>
  </div>
);

class StudentDetailsPage extends Component {
  constructor(props){
    super(props);
    this.state ={data:temp_data};
  }
  componentDidMount() {
    let app = this.props.app;
    const studentService = app.service('students');
    //studentService.get_all_classes(this.props.id).then(page => this.setState({ data: page.data }));
  }

  render() {
    return (
    <MuiThemeProvider>
      <div style={{width:"80%",marginLeft:"20%"}}>
        <div>
          </div>
          <LeftNav width="25%" open={true}/>
        <div>
          <TimeCard id={this.props.id}/>
          <TimeTable data={this.state.data}/>
        </div>
      </div>
    </MuiThemeProvider>);
  }
}
export default StudentDetailsPage;
