import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DockedDrawer from './docked-drawer'

export default class TopBar extends React.Component{
    constructor(props){
      super(props);
      this.state = {drawer_open:false};
    }
    handleToggle = () => this.setState({drawer_open: !this.state.drawer_open});
    handleSelfClose = () => this.setState({drawer_open: false});
    render(){
      return <div>
              <MuiThemeProvider>
                <DockedDrawer open={this.state.drawer_open} close={this.handleSelfClose}/>
              </MuiThemeProvider>
              <MuiThemeProvider>
                <AppBar title={"Nexus"} onLeftIconButtonTouchTap={this.handleToggle}/>
              </MuiThemeProvider>;
            </div>
    }
}
