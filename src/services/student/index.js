'use strict';

const hooks = require('./hooks');
const conn_arr = {client:'pg',connection:'postgres://postgres@localhost/calender'}
const db = knex(conn_arr);
var pg = require('knex')({client: 'pg',connection:'postgres://postgres@localhost/calender'});

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return db.from("student").select();
  }

  get(id, params) {
    return Promise.resolve({
      id,db.from("student").where('usn', 'ilike',id).select();
    });
  }

  create(data, params) {
    return Promise.all([
      function(){
        return pg("student").insert(
            {
             usn:data["usn"],
             name:data["name"],
             adv_id:data["adv_id"],
             doa:data["doa"],
             dob:data["dob"],
             gender:data["gender"],
             dep_id:data["dep_id"],
             sec_id:data["sec_id"]
            }
        );
      }
    ]);
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
  app.use('/students', new Service());

  // Get our initialize service to that we can bind hooks
  const studentService = app.service('/students');

  // Set up our before hooks
  studentService.before(hooks.before);

  // Set up our after hooks
  studentService.after(hooks.after);
};

module.exports.Service = Service;
