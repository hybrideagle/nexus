import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default (props) => {
    return (
      <div>
        <RaisedButton label="Toggle Drawer"/>
        <Drawer open={props.open} width={props.width}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
}