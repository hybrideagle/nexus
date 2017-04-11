'use strict';

const hooks = require('./hooks');
const conn_arr = {client:'pg',connection:'postgres://postgres@localhost/calender'}
const db = knex(conn_arr);

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return db.from("student").select();
  }

  get(id, params) {
    return Promise.resolve({
      id,db.from("student").where('usn', 'ilike',$id).select();
    });
  }

  create(data, params) {
    if(Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }
    return Promise.all([
      function(){
        return knex("student").insert(
            {
             usn:"$data[0]",
             name:"$data[1]",
             adv_id:"$data[2]",
             doa:"$data[3]",
             dob:"$data[4]",
             gender:"$data[5]",
             dep_id:"$data[6]",
             sec_id:"$data[7]"
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
