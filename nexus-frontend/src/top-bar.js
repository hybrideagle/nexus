import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DockedDrawer from './docked-drawer'

export default (props) => {
           return (<div>
              <MuiThemeProvider>
                <AppBar title={"Nexus"}/>
              </MuiThemeProvider>;
            </div>);
    }

