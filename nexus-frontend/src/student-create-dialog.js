import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class StudentCreateDialog extends React.Component{

  constructor(props){
    super(props);
    this.state = {usn:""};
  }

  handleSubmit = (event) => {
      console.log("handling submit:",this.state.usn);
      this.props.submit(this.state.usn);
      event.preventDefault();
  }
  
  render(){
    let actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />
    ];

    return (
      <Dialog
        title="Dialog With Actions"
        actions={actions}
        modal={true}
        open={this.props.open}
      >
        <form>
          <label>
            <input type="text" value={this.state.usn} onChange={(e)=>this.setState({usn:event.target.value})}/>
          </label>
        </form>
      </Dialog>
    );

  }
}

export default StudentCreateDialog;
