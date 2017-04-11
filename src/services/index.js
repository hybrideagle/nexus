'use strict';
const department = require('./department');
const instructorClasses = require('./instructor-classes');
const studentClasses = require('./student-classes');
const instructor = require('./instructor');
const student = require('./student');
const authentication = require('./authentication');
const user = require('./user');
const Sequelize = require('sequelize');

module.exports = function() {
  const app = this;

  const sequelize = new Sequelize(app.get('postgres'), {
    dialect: 'postgres',
    logging: false
  });
  app.set('sequelize', sequelize);

  app.configure(authentication);
  app.configure(user);
  app.configure(student);
  app.configure(instructor);
  app.configure(studentClasses);
  app.configure(instructorClasses);
  app.configure(department);
};
