import StudentDetails from './student-details'
import React, { Component } from 'react';
import TopBar from './top-bar';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftNav from './left-nav'
let temp_data = {
  data:[{
    id:1,
    name:"asd",
    age:"asasd"
  },{
    id:2,
    name:"asd",
    age:"asasd"
  },{
    id:3,
    name:"asd",
    age:"asasd"
  }]};

let StudentCard = () =>
(<MuiThemeProvider>
  <div style={{width:"50%",margin:"0 auto",textAlign:"center"}}>
    <Paper zDepth={2}>
      <h1>Instructors</h1>
    </Paper>
  </div>
</MuiThemeProvider>);

class StudentDetailsPage extends Component {
  constructor(props){
    super(props);
    this.state ={data:temp_data};
  }
  componentDidMount() {
    let app = this.props.app;
    const studentService = app.service('students');
    studentService.find().then(page => this.setState({ data: page.data }));
  }

  render() {
    return (
    <MuiThemeProvider>
      <div style={{width:"80%",marginLeft:"20%"}}>
        <div>
        <TopBar />
        </div>
        <LeftNav width="20%" open={true}/>
        <div>
          <StudentCard />
          <StudentDetails studentData={this.state.data}/>
        </div>
      </div>
    </MuiThemeProvider>);
  }
}
export default StudentDetailsPage;
