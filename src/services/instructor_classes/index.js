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
    return this.db.raw('SELECT c_id,course.name FROM student inner join takes_course using (usn)inner join course using(c_id)\
      INNER JOIN class_once using (c_id) INNER JOIN instructor on (instructor.in_id=class_once.i_id) WHERE usn like ? ORDER BY\
      on_date,at_time;',[id]).then((d)=>d.rows);
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
  app.use('/instructor_classes', new Service());

  // Get our initialize service to that we can bind hooks
  const instructor_classesService = app.service('/instructor_classes');

  // Set up our before hooks
  instructor_classesService.before(hooks.before);

  // Set up our after hooks
  instructor_classesService.after(hooks.after);
};

module.exports.Service = Service;
