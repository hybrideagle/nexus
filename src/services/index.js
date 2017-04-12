'use strict';


const instructorClasses = require('./instructor_classes');


const studentClasses = require('./student_classes');


const instructors = require('./instructors');


const students = require('./students');


module.exports = function() {
  const app = this;


  app.configure(students);
  app.configure(instructors);
  app.configure(studentClasses);
  app.configure(instructorClasses);
};
