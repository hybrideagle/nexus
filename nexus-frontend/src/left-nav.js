import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
export default (props) => {
    return (
      <div>
        <Drawer open={props.open} width={+(props.width)}>
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <Link to="/students"><MenuItem>Students</MenuItem></Link>
          <Link to="/students-classes/1"><MenuItem>Student Timetable</MenuItem></Link>
          <Link to="/instructors-classes/1"><MenuItem>Instructor Timetable</MenuItem></Link>
          <Link to="/departments"><MenuItem>Departments</MenuItem></Link>
        </Drawer>
      </div>
    );
}
