'use strict';
const department = require('./department');
const instructorClasses = require('./instructor-classes');
const studentClasses = require('./student-classes');
const instructor = require('./instructor');
const student = require('./student');

module.exports = function() {
  const app = this;

  app.configure(student);
  app.configure(instructor);
  app.configure(studentClasses);
  app.configure(instructorClasses);
  app.configure(department);
};
