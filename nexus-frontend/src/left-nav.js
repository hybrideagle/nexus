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
          <Link to="/instructors"><MenuItem>Instructors</MenuItem></Link>
          <Link to="/student_classes/01FB15ECS306"><MenuItem>Student Timetable</MenuItem></Link>
          <Link to="/instructor_classes/01FB15ECS306"><MenuItem>Instructor Timetable</MenuItem></Link>
          <Link to="/departments"><MenuItem>Departments</MenuItem></Link>
        </Drawer>
      </div>
    );
}
