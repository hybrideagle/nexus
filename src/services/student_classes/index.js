'use strict';

const hooks = require('./hooks');
var conn_arr = {client:'pg',connection:'postgres://postgres@localhost/calender'}
//var db = knex(conn_arr);

class Service {
  constructor(options) {
    this.options = options || {};
    this.db = require('knex')({client: 'pg',connection:'postgres://postgres@localhost/calender'});

  }

  find(params) {
    return Promise.resolve([]);
  }

  get(id, params) {
    return this.db.raw('SELECT c_id,name,takes_class_recurring.at_time FROM class_recurring INNER JOIN takes_class_recurring using (c_id)\
     INNER JOIN student using (usn)WHERE usn ilike ? ORDER BY class_recurring.at_time;',[id])
      .then((d)=>d.rows);
  }

  create(data, params) {
    if(Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/student_classes', new Service());

  // Get our initialize service to that we can bind hooks
  const student_classesService = app.service('/student_classes');

  // Set up our before hooks
  student_classesService.before(hooks.before);

  // Set up our after hooks
  student_classesService.after(hooks.after);
};

module.exports.Service = Service;
